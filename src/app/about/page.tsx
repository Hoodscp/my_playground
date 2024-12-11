import styles from './page.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>이지훈</h1>
        <p>중부대학교 정보보호학과 21학번 입니다.</p>
        <p>- SCP 동아리 2024년 학습부장</p>
        <p>- SCP 동아리 2025년 회장</p>
      </div>
      <div className={styles.videoContainer}>
        <video controls width="100%" height="auto">
          <source src="/video/sample.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
      </div>
    </div>
  )
}
