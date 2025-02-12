import React from "react";

export default function Header({ author }) {
    return (<h1>Belajar React Bareng {author ? author : "Aji"} 🚀</h1>)
}