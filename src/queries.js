export const queries = {
    getAllParametros: "SELECT * FROM parametros",
    getParametroById: "SELECT * FROM parametros where id = @Id",
    addNewParametro: "INSERT INTO parametros (parametro, descripcion) VALUES (@parametro, @descripcion)",
    deleteParametro: "DELETE FROM parametros where id = @Id",
    getTotalParametros: "SELECT COUNT(*) FROM parametros",
    updateParametro: "UPDATE parametros SET parametro = @parametro, descripcion = @descripcion WHERE id = @Id"
} 