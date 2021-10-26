// Import styles
import styles from './styles.scss';
import img from '../../../assets/logo_ldo.jpeg'

export default function News() {
  return (
    <article className="news">
      <div className="news-image">Image de l'actualité</div>
      <div className="news-text">
      <h2 className="news-title">Titre de l'actualité</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus non augue sed sagittis. Vivamus ut nunc libero. Proin aliquam sollicitudin massa, ut efficitur nunc tincidunt auctor. Donec odio lorem, interdum quis condimentum eu, pulvinar vel justo. In non commodo nibh. Duis luctus magna ac lacus euismod varius. Aenean cursus justo sed justo pellentesque, sed finibus enim lacinia. Suspendisse potenti. Etiam quis tempus nulla, vel iaculis mauris. Vestibulum posuere nunc sit amet commodo tincidunt. Pellentesque tincidunt eget dolor eget maximus. Proin et vestibulum dui. Aenean porttitor enim sed orci efficitur lacinia. In eget eleifend ex.
          Cras eleifend finibus placerat. In egestas neque sit amet arcu aliquet, sit amet egestas nisi finibus. Aenean elementum orci ac lacus porttitor, eget ultrices lacus posuere. Vivamus in nunc non enim sollicitudin vehicula. Quisque molestie maximus arcu eget pretium. Quisque vulputate a lacus non lacinia. Ut et tellus nisi. Morbi varius nulla quis venenatis fermentum. Phasellus auctor vestibulum tortor et vulputate. Aliquam erat volutpat. Aenean vitae sapien vestibulum, feugiat tortor eu, vulputate augue. Nullam vitae gravida dolor. Mauris ultrices ante a diam varius egestas sit amet vel ipsum. Fusce efficitur varius semper. Maecenas euismod ante faucibus bibendum hendrerit. Integer rutrum imperdiet tortor, a aliquam nisi dignissim vel.
        </p>
      </div>
    </article>
  );
};
