package user

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func Routes(r chi.Router) {
	r.Get("/user", http.HandlerFunc(GetAllUsersController))
	r.Post("/user", http.HandlerFunc(CreateUserController))
}