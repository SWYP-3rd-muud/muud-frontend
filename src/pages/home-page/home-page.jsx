import Calendar from 'react-calendar';
import styles from './home-page.module.css';
import 'react-calendar/dist/Calendar.css';

import './custom-calendar.css'
import MusicPlayer from '../../components/MusicPlayer'
import RoundButton from '../../components/common/RoundButton'
import Tags from '../../components/common/Tags';
import { getMoodIcon } from '../../utils';

const HomePageView = ({ moment, handleRecord, handleEdit, tileClassNames, updateActiveDay, currentDate, addContent, updateActiveMonth, playlist, currentDiary }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.calendarContainer}>
        <Calendar
          locale="ko"
          value={currentDate.toDate()}
          onChange={updateActiveDay}
          onActiveStartDateChange={({ activeStartDate }) => //activeStartDate :현재 보여지는 년, 월, 일의 가장 첫 날짜
            updateActiveMonth(activeStartDate)
          }
          next2Label={null}
          prev2Label={null}
          formatMonthYear={(format, date) => moment(date).format('YYYY년 MM월')}
          formatDay={(locale, date) => moment(date).format('D')}
          tileContent={addContent}
          tileClassName={tileClassNames}
          showNeighboringMonth={false}
        />
      </div>
      <div className={styles.diaryContainer}>
        <div>
          <div className={styles.diaryHeader}>
            <span className={styles.diaryTitleTxt}>{moment(currentDate).format('YYYY.MM.DD (ddd)')}</span>
            {currentDiary.emotion && (
              <>
                <span><img src={getMoodIcon(currentDiary.emotion.titleEmotion)} className={styles.moodIcon} /></span>
                <span className={styles.editBtnArea}><button className={styles.editIcon} onClick={handleEdit}></button></span>
              </>)}
          </div>
          {currentDiary.emotion ? (
            <div className={styles.diaryCardContent}>
              <MusicPlayer video={currentDiary.playlist && currentDiary.playlist.videoId} />
              <div className='mTopES'>
                {currentDiary.emotion.tags && <Tags array={currentDiary.emotion.tags}></Tags>}
              </div>
              <div>
                {currentDiary.content}
              </div>
            </div>
          ) : (
            <div className={styles.diaryContent}>
              <div className={styles.diaryTitleTxt}>아직 일기 기록이 없어요.</div>
              <div className={styles.diaryTxt}>감정도 기록하고,감정에 맞는 {'\n'}
                플리도 추천 받을 수 있어요</div>
              <div>
                <img className={styles.characterImg} src='/images/happy_write_character.png' />
              </div>
              <RoundButton size='small' active onClick={handleRecord}>감정 기록하기</RoundButton>
            </div>
          )}

        </div>

      </div>
    </div >
  )
}

export default HomePageView
