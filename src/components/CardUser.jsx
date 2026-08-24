import styles from './CardUser.module.css';

function CardUser(props) {
  return (
    <div className={styles['card-user']}>
      <div className={styles['main-profile']}>
        <img 
          className={styles['card-user_image']} 
          src={props.user.image} 
          alt={props.user.firstName} 
        />
        <div className={styles['card-user_details']}>
          <h3 className={styles['card-user_name']}>
            {props.user.firstName} {props.user.lastName}
          </h3>
          <p className={styles['card-user_info']}>
            {props.user.age} anos | {props.user.gender}
          </p>
        </div>
      </div>

      <div className={styles['details-profile']}>
        <p><strong>Email:</strong> {props.user.email}</p>
        <p><strong>Telefone:</strong> {props.user.phone}</p>
        <p><strong>Empresa:</strong> {props.user.company.name}</p>
        <p><strong>Cargo:</strong> {props.user.company.title}</p>
        <p><strong>Cidade:</strong> {props.user.address.city} - {props.user.address.stateCode}</p>
      </div>
    </div>
  );
}

export default CardUser;