export const getClientes = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL)
      const jsonData = await response.json()
      console.table(jsonData)
      return jsonData
    } catch (error) {
      console.error('Error al obtener datos:', error)
    } finally {
      //setLoading(false);
    }
}

export const getCliente = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
      const jsonData = await response.json()
      //console.table(jsonData)
      return jsonData
    } catch (error) {
      console.error('Error al obtener datos:', error)
    } finally {
      //setLoading(false);
    }
}

// Función para realizar una solicitud PUT
export const createCliente = async (data) => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        body: JSON.stringify(data), // Convierte el objeto de datos a JSON
        headers: {
            'Content-Type': 'application/json', // Ajusta el tipo de contenido según tus necesidades
            // Puedes agregar más encabezados si es necesario
          },
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error; // Lanza el error para que pueda ser manejado externamente
    }
}

export const editCliente = async (id, data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data), // Convierte el objeto de datos a JSON
        headers: {
            'Content-Type': 'application/json', // Ajusta el tipo de contenido según tus necesidades
            // Puedes agregar más encabezados si es necesario
          },
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error; // Lanza el error para que pueda ser manejado externamente
    }
}
  