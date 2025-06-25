import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <div className="container mx-auto flex justify-around gap-4 p-4">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    );
};

export default Services;