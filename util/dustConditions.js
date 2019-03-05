export const dustConditions = {
  Good: {
    color: '#00d2ff',
    title: '미세먼지 없음',
    subtitle: '',
    icon: 'weather-rainy',
    img : require('../assets/goodimg.png')
  },
  soso: {
    color: '#3b9dd1',
    title: '미세먼지 보통',
    subtitle: '',
    icon: 'weather-sunny',
    img : require('../assets/sosoimg.png')
  },
  bad: {
    color: '#d13b3b',
    title: '미세먼지 나쁨',
    subtitle: '마스크 착용',
    icon: 'weather-lightning',
    img : require('../assets/badimg.png')
  },
  veryBad: {
    color: '#3f3f3f',
    title: '미세먼지 최악',
    subtitle: '마스크 착용 필수',
    icon: 'weather-hail',
    img : require('../assets/verybadimg.png')
  },
};
