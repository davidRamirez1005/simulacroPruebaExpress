import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const config = JSON.parse(process.env.MY_CONFIG)

const con = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port
})
// Intentar obtener una conexión del pool para validarla
con.getConnection((err, connection) => {
    if (err) {
    console.error('Error al conectar a la base de datos:');
} else {
    connection.release();
}
});
export const servidor = ({
    port: process.env.PORT || 3000,
    addresses: process.env.IP,
});

export default con;
