import RoundButton from '../../components/common/RoundButton';
import styles from './mood-choose-page.module.css';

const MoodChoosePageView = ({ handleMoodClick, handleButtonClick, selectedOption, currentDateKor, moodQnAArray }) => {

  const MoodButton = ({ children, mood }) => {
    const style = (selectedOption == mood) ? styles.moodBtn + ' ' + styles.active : (selectedOption == undefined) ? styles.moodBtn : styles.moodBtn + ' ' + styles.inactive;
    return (
      <div className={styles.btnContainer}>
        <button
          className={style}
          onClick={() => handleMoodClick(mood)}
        >{children}</button>
      </div >
    )
  }

  return (
    <div className='appContainer topbar'>
      <div className='headerSubtitle align'>{currentDateKor}
      </div>

      <div className='headerTitle large align'>오늘 느낀 감정을 골라주세요</div>
      <div className='headerSubtitle align g'>내가 느낀 감정 한개를 선택해주세요</div>
      <div className='mTopES'>
        {moodQnAArray.map((item, index) => (<MoodButton key={index} index={index} mood={item.mood}>{item.text}</MoodButton>))}
      </div>
      <div className='mTopM'>
        <RoundButton onClick={handleButtonClick} active={(selectedOption != undefined)} >다음</RoundButton>
      </div>
    </div>
  )
}

export default MoodChoosePageView
