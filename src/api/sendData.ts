const URL = "https://api.sbercloud.ru/content/v1/bootcamp/frontend";

const sendData = async (data: any) => {
  
  const response = await fetch (URL, {
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