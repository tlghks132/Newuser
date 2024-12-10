// 폼 제출 이벤트 처리
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    // 입력 값 가져오기
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const userid = document.getElementById("userid").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // 필수 입력값 확인
    if (!username || !email || !phone || !userid || !password || !confirmPassword) {
        errorMessage.textContent = "모든 필드를 입력해주세요.";
        errorMessage.style.color = "red";
        return;
    }

    // 비밀번호 확인 로직
    if (password !== confirmPassword) {
        errorMessage.textContent = "비밀번호가 일치하지 않습니다.";
        errorMessage.style.color = "red";
        return;
    }

    // 성공적인 가입 처리
    alert("회원가입이 완료되었습니다!");

    // 입력 필드 초기화
    document.getElementById("signup-form").reset();
    errorMessage.textContent = ""; // 에러 메시지도 초기화
});

// 아이디 중복 확인 버튼 클릭 이벤트 처리
document.getElementById("check-id").addEventListener("click", function () {
    const userId = document.getElementById("userid").value.trim();
    const errorMessage = document.getElementById("error-message");

    // 아이디 입력 여부 확인
    if (!userId) {
        errorMessage.textContent = "아이디를 입력하세요.";
        errorMessage.style.color = "red";
        return;
    }

    // 중복된 아이디 확인 (예시 데이터)
    const usedUserIds = ["test123", "example", "demo"]; // 이미 사용 중인 아이디 목록
    if (usedUserIds.includes(userId)) {
        errorMessage.textContent = "이미 사용 중인 아이디입니다.";
        errorMessage.style.color = "red";
    } else {
        errorMessage.textContent = "아이디를 사용할 수 있습니다.";
        errorMessage.style.color = "green";
    }
});
