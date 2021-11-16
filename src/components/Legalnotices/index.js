// import styles
import './styles.scss';

export default function Legalnotices() {
  return (
    <div className="legalNotice">
      <h1 className="legalNotice-title"> Mentions légales </h1>
      <div className="legalNotice-container">
        <article className="legalNotice-container-content">
          <h2>
            Selon les dispositions de l’article 6 du Règlement (UE) 2016/679 relatif
            à la protection des données, lors d’un dépôt de candidature, vous
            consentez au traitement de vos données à caractère personnel pour les
            seules finalités suivantes :
          </h2>
          <p>
            - Collecte de vos compétences et expériences afin d’analyser l’adéquation
            de ces dernières avec les postes à pourvoir au sein de notre structure,
            Collecte de vos coordonnées en vue de l’organisation d’un éventuel
            entretien d’embauche.
          </p>
          <p>
            - Les seules personnes destinataires de ces données sont le personnel de
            LDO Transports chargés du recrutement.
          </p>
          <p>
            - Vos données personnelles (CV, Lettre de motivation, e-mail) seront
            conservées au maximum pendant 2 ans. En cas d’embauche, les données
            pourront être conservées pendant toute la durée du contrat de travail.
            En l’absence de fourniture de vos différentes compétences et expériences
            et de coordonnées permettant de vous contacter, nous ne pourrons donner
            suite à votre candidature.
          </p>
        </article>
        <article className="legalNotice-container-content">
          <h2>
            Lors d’une demande de contact, vous consentez au traitement de vos données à
            caractère personnel pour les seules finalités suivantes :
          </h2>
          <p>
            - Prise de contact par l’entreprise LDO Transports.
          </p>
          <p>
            - Les seules personnes destinataires de ces données sont le personnel de LDO
            Transports en charge du développement commercial pour tout sujet en lien
            avec une demande de prestation, le personnel de LDO Transports en charge du
            recrutement pour tout sujet en lien avec les ressources humaines, le
            personnel en charge de la maîtrise des infrastructures et de l’environnement
            travail pour tous les autres sujets.
          </p>
          <p>
            - Vos données personnelles seront conservées au maximum pendant 1 an.
          </p>
          <p>
            - En l’absence de fourniture de votre nom et mail et de la nature de votre
            demande, nous ne pourrons donner suite à votre demande de contact.
          </p>
          <p>
            - Le responsable du traitement des données est  LDO Transports.<br />
            Vous pouvez nous contacter par mail : qualite@ldo-transports.com.
          </p>
          <p>
            - Vous pouvez à tout moment nous contacter pour retirer votre consentement,
            sans toutefois porter atteinte à la licéité du traitement fondé sur le
            consentement effectué avant le retrait de celui-ci.
          </p>
          <p>
            - Vous disposez également à tout moment du droit de demander au responsable du
            traitement l’accès aux données à caractère personnel, la rectification ou
            l’effacement de celles-ci, ou une limitation du traitement ou du droit de
            s’opposer au traitement et du droit à la portabilité des données.
          </p>
        </article>
      </div>
    </div>
  );
}
