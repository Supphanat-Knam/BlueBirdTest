package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	gomail "gopkg.in/gomail.v2"
)

type Data struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func getFormData(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var data Data

		// Decode JSON data from request body
		err := json.NewDecoder(r.Body).Decode(&data)
		if err != nil {
			http.Error(w, "Invalid data", http.StatusBadRequest)
			return
		}
		m := gomail.NewMessage()
		m.SetHeader("From", "hello@demomailtrap.com")
		m.SetHeader("To", "drogon096332@gmail.com")
		m.SetAddressHeader("Cc", "drogon096332@gmail.com", "Champ")
		m.SetHeader("Subject", "Hello!")
		m.SetBody("text/plain", data.Message)
		// m.Attach("/home/Alex/lolcat.jpg")

		d := gomail.NewDialer("live.smtp.mailtrap.io", 587, "api", "5246d8b79d41c5cf1d9bff5c04241572")

		// Send the email to Bob, Cora and Dan.
		if errSend := d.DialAndSend(m); errSend != nil {
			panic(errSend)
			w.Write([]byte("Send mail error"))
			return
		}

		fmt.Printf("Received: %+v\n", data)

		// Send a response
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Send mail successfully"))
		return
	}

	http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
}

func enableCors(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r)
	}
}

func main() {
	http.HandleFunc("/submit", enableCors(getFormData))

	fmt.Println("Server running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
