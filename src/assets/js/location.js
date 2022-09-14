function success(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  // console.log(latitude);
  // console.log(longitude);

  const positions = [
    // 각 지점의 경도, 위도를 배열 형식으로 저장해 놓기 위한 positions 객체 생성
    {
      title: 'myhouse',
      lat: latitude,
      lon: longitude
    },
    {
      title: 'A',
      lat: 37.5103,
      lon: 127.0669
    },
    {
      title: 'B',
      lat: 37.558,
      lon: 126.8601
    },
    {
      title: 'C',
      lat: 37.5293,
      lon: 127.125
    },
    {
      title: 'D',
      lat: 37.4979,
      lon: 126.8653
    },
    {
      title: 'E',
      lat: 37.4737,
      lon: 126.9525
    }
  ]

  const arr = [] // distance를 저장해두는 배열집합
  let distance // haversine 공식으로 나온 거리
  let min // 최소거리
  let minFirestation // 최소 거리에 있는 소방서
  const radius = 6371 // 지구의 반지름
  const toRadian = Math.PI / 180 // 라디안으로 바꾸기 위한 선언

  // Haversine 공식을 이용한 위도, 경도를 이용한 두 지점 사이의 거리 구하기
  for (let i = 1; i < positions.length; i++) {
    const deltaLatitude =
          Math.abs(positions[0].lat - positions[i].lat) * toRadian
    const deltaLongtitude =
          Math.abs(positions[0].lon - positions[i].lon) * toRadian

    const sinDeltaLat = Math.sin(deltaLatitude / 2)
    const sinDeltaLng = Math.sin(deltaLongtitude / 2)
    const squareRoot = Math.sqrt(
      sinDeltaLat * sinDeltaLat +
            Math.cos(positions[0].lat * toRadian) *
              Math.cos(positions[i].lat * toRadian) *
              sinDeltaLng *
              sinDeltaLng
    )
    distance = 2 * radius * Math.asin(squareRoot)

    arr[i] = distance

    console.log(arr[i])
  }
  //   alert("여기까지 왔누");

  min = arr[1]
  for (let i = 2; i < positions.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
      minFirestation = positions[i].title
      // console.log(min_firestation);
    } else {
      continue
    }
  }
  //   alert("여기까지 왔어요");
  //   alert(min_firestation);
  // console.log(document.getElementById("a"));
  document.getElementById('firestation').value = minFirestation // value 값을 넘겨주어서 input으로 받을수 있게 됨!!! 그 후 value를 넘겨줄 수 있나??
  document.getElementById('info').innerText = minFirestation + '소방서로 배정되었습니다!'
}
function error() {
  alert('cannot use geolocation api!')
}
navigator.geolocation.getCurrentPosition(success, error)
