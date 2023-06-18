const sendData = async (url:any, data:any) => {
  const response = await fetch (url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
    });
  if (response.ok){
    return true;
  }
}
export default sendData;