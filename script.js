// 페이지 로드 시 로컬 저장소에서 저장된 글들을 불러오기
window.onload = function() {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('posts');
    
    savedPosts.forEach(function(postText) {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');
        postContainer.textContent = postText;
        postsContainer.appendChild(postContainer);
    });
};

// 글 제출 버튼 클릭 시
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    const postText = document.getElementById('postText').value;
    if (postText.trim() === '') return; // 빈 글은 제출하지 않음

    // 글 컨테이너 생성
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    postContainer.textContent = postText;

    // #posts에 추가
    document.getElementById('posts').appendChild(postContainer);

    // 로컬 저장소에 글 추가
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push(postText);
    localStorage.setItem('posts', JSON.stringify(savedPosts));

    // 입력란 비우기
    document.getElementById('postText').value = '';
    document.getElementById('postText').focus();
});