def fetch_recipe_data(keyId, serviceId, startIdx, endIdx, dataType="json", additional_params=None):
    import requests
    
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

# API 호출 및 데이터 추출
keyId = "639e8e893d6445718216"
serviceId = "COOKRCP01"
startIdx = 1
endIdx = 50  # 더 많은 데이터를 가져오기 위해 범위를 늘림

# 필터링할 재료 리스트
filter_ingredients = ["떡", "달걀", "파", "마늘", "고추", "쌀", "소금", "흑미", "돼지고기", "소고기"]

# API 호출
recipe_data = fetch_recipe_data(keyId, serviceId, startIdx, endIdx, dataType="json")

# 요리 이름과 재료 필터링 및 출력
if isinstance(recipe_data, dict):  # 응답이 JSON 형식일 때
    recipes = recipe_data.get("COOKRCP01", {}).get("row", [])
    for recipe in recipes:
        recipe_name = recipe.get("RCP_NM", "이름 없음")  # 요리 이름
        recipe_ingredients = recipe.get("RCP_PARTS_DTLS", "재료 정보 없음")  # 재료 정보

        # 재료 리스트 중 하나라도 포함되어 있는지 확인
        if any(ingredient in recipe_ingredients for ingredient in filter_ingredients):
            print(f"요리 이름: {recipe_name}")
            print(f"재료: {recipe_ingredients}")
            print("-" * 30)
else:
    print(recipe_data)