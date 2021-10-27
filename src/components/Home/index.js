// import components
import History from 'src/components/Home/History';
import Activities from 'src/components/Home/Activities';
import HomeNav from 'src/components/Home/Homenav';

// import styles
import './styles.scss';

export default function Home() {
  return (
    <HomeNav />
    <Activities />
    <History />
  );
}
