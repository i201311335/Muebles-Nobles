export default function Buscador() { 
    return(
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar.." aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Buscar</button>
        </form>
    );
}