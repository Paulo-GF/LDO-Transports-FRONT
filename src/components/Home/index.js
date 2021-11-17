// import components
import History from 'src/components/Home/History';
import Activities from 'src/components/Home/Activities';
import HomeNav from 'src/components/Home/Homenav';
import News from 'src/components/Home/News';
import Map from 'src/components/Home/Map';

// import styles
import './styles.scss';

export default function Home() {
  return (
    <div className="home">
      <HomeNav />
      <Activities />
      <History />
      <News />
      <Map />
    </div>
  );
}
