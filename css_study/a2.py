import requests

# API URL과 파라미터 설정
url = "https://apihub.kma.go.kr/api/typ01/url/fct_shrt_reg.php"
params = {
    'tmfc': '0',               # 발표시간 (0이면 가장 최근)
    'authKey': 'hXornVuKTwu6K51bir8Lfw',  # 발급된 API 인증키
    'reg': '108',              # 부산 예보구역 코드
    'stn': '',                 # 발표관서번호 (필요에 맞게 설정)
    'disp': '1'                # 구분자(,)로 구분, 엑셀에 적합
}

# API 호출
response = requests.get(url, params=params)

# 응답이 성공적으로 오면 데이터 처리
if response.status_code == 200:
    data = response.json()
    
    # 하늘 상태(SKY)와 기온(TA) 추출
    try:
        for item in data['data']:
            sky = item.get('SKY', '정보 없음')
            temperature = item.get('TA', '정보 없음')
            print(f"하늘 상태: {sky}, 기온: {temperature}°C")
    except KeyError:
        print("데이터 처리 중 오류가 발생했습니다.")
else:
    print(f"API 호출 실패, 상태 코드: {response.status_code}")
