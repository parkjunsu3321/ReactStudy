import requests

def fetch_recipe_data(keyId, serviceId, startIdx, endIdx, dataType="json", additional_params=None):
    base_url = "http://openapi.foodsafetykorea.go.kr/api"
    url = f"{base_url}/{keyId}/{serviceId}/{dataType}/{startIdx}/{endIdx}"
    
    if additional_params:
        params = "&".join([f"{key}={value}" for key, value in additional_params.items()])
        url += f"/{params}"
    
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()
    else:
        return f"Error: {response.status_code}"

keyId = "639e8e893d6445718216"
serviceId = "COOKRCP01"
startIdx = 1
endIdx = 5

additional_params = {
    "RCP_NM": "떡볶이",
    "RCP_PARTS_DTLS": "떡",  
}
recipe_data = fetch_recipe_data(keyId, serviceId, startIdx, endIdx, dataType="json", additional_params=additional_params)
print(recipe_data)