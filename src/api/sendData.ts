const sendData = async (url: string, data: any) => {
  
  const response = await fetch (url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
    });
    
    let result = await response.json();
    return result;
}

export default sendData;