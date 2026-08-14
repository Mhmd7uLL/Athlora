import app from "./app"
const port = 3000;
const host = 'localhost';


app.listen(port, () => {
    console.log(`Server berjalan di http://${host}:${port}`)
})