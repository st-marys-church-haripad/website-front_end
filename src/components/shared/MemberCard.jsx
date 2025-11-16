import { no_image } from "@/assets/asset";

const MemberCard = ({ user }) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={user.name}>
    <div className="card" style={{ minHeight: '332px' }}>
      <div className="image-wrapper">
        <img
          src={user?.prof_img ? user.prof_img : no_image}
          className="card-img-top"
          loading='lazy'
          alt={user?.name || "Profile"}
          style={{
            transition: 'filter 0.6s ease',
            display: 'block',
            width: user?.prof_img ? '100%' : '40%',
            height: user?.prof_img ? '100%' : '40%',
            objectFit: user?.prof_img ? 'cover' : 'contain',
            objectPosition: 'center top',
          }}
        />
      </div>
      <div className="card-body text-center">
        <h3 className='fs-14'>{user?.name}</h3>
        <p className='fs-14 mb-0'>{user?.desig}</p>
        {user?.number && <p className='fs-14 mb-0'>{user.number}</p>}
        {user?.address && <p className='fs-14 mb-0'>{user.address}</p>}
      </div>
    </div>
  </div>
);

export default MemberCard;