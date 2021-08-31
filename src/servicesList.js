import Service from './Service';


function servicesList(props) {
    const ServicesData = props.servicesData;

    const serviceElements = [];

    for (let i = 0; i < ServicesData.length; i++) {
        const service = ServicesData[i];

        serviceElements.push(
            <Service title={service.title} cost={service.cost} />
        )
    }

    return (
        <div>
            {serviceElements}
        </div>
    );
}

export default servicesList;