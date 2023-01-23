module.exports = {
    // eslint의 동작환경을 지정
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    // 기본적인 룰셋을 지정
    'extends': 'eslint:recommended',
    // 특정 파일에만 다른 룰을 지정
    'overrides': [],
      // 사용환경을 최신 자바스트립트로 가정
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    // extends 옵션으로 지정한 룰셋을 덮어씌운다
    rules: {
        // 줄바꿈은 유닉스 스타일로 통일하겠다
        'linebreak-style': ['error', 'unix'],
        // 문자열은 홑 따옴표로 정의하겠다
        quotes: ['error', 'single'],
        // 세미콜론은 사용하지 않겠다(자바스크립트 프로젝트에서는 세미콜론을 권장)
        semi: ['error', 'never'],
    },
}