import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>

        <div className="container grid grid-three-cols">
          {services.map((currelement, index) => {
            const{Provider , Price , Service , description} = currelement;
            return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src="/images/design.png" alt="our services" width="200" />
              </div>

              <div className="card-details">
                <div className="gird grid-two-cols">
                  <p>{Provider}</p>
                  <p>{Price}</p>
                </div>
                <h2>{Service}</h2>
                <p>{description}</p>
              </div>
            </div>
            )
          })}
        </div>
      </section>
    </>
  );
};
