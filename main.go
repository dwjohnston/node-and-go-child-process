package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Running")
	http.ListenAndServe(":80", nil)
}
