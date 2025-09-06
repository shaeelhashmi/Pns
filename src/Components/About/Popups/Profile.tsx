import SubHeading from "../../Utils/Text/SubHeading";
import Subtext from "../../Utils/Text/Subtext";

type ProfileProps = {
  profile: {
    name: string;
    Education: string;
    awards: string;
    image: string;
    description: string;
    email: string;
    subname:string
  };
};

export default function Profile({ profile }: ProfileProps) {
  if (!profile) return null;

  return (
    <>     
  <div className="grid md:grid-cols-[20%_1fr_20%] grid-cols-[15%_1fr_15%]  items-center justify-center mb-8 bg-white p-4">
  {/* Left side */}
  <div className="flex items-center space-x-1 w-full">
    <div className="bg-[#5FB386] rounded-full ml-2 h-5 w-5 shrink-0"></div>
    <div className="bg-[#5FB386] h-2 flex-1 sm:block hidden"></div>
  </div>

  {/* Heading */}
  <div className="text-center flex justify-center items-center">
    <h1 className="md:text-4xl sm:text-3xl text-2xl  font-bold after:w-[70%] after:content-[''] after:block after:h-[2px] after:bg-[#047957] after:mt-2 after:mx-auto w-fit">
      KNOW THE EDITORS
    </h1>
  </div>

  {/* Right side */}
  <div className="flex items-center space-x-1 w-full">
    <div className="bg-[#5FB386] h-2 flex-1 sm:block hidden"></div>
    <div className="bg-[#5FB386] rounded-full h-5 w-5 shrink-0 ml-auto"></div>
  </div>
</div>

    <div 
      className="relative bg-white p-8 shadow-lg rounded-lg"
      style={{
        background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #047957, #4ade80, #047957) border-box',
        border: '8px solid transparent',
        borderRadius: '0.5rem'
      }}
    >
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-start space-x-6 sm:flex-row flex-col ">
          <div className="flex-shrink-0">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <div>
            <h3  className="text-[1.1rem] md:text-[1.4rem] font-bold text-[#064E3B]  font-georgia">{profile.name}</h3>
            <p className="text-sm text-[#4A5568]  md:text-[0.95rem]  font-arial">
             {profile.Education} 
            </p>
          </div>
        </div>
        <div className="">
                   <SubHeading subheading={profile.subname} color="#064E3B" ></SubHeading>
          <p className="text-[#718096] md:text-[1.3rem] text-[1.05rem]">  {profile.awards}</p>
        </div>

        <div className=" ay-700 text-justify leading-relaxed whitespace-pre-line">
          <Subtext description={profile.description} />
           </div>

          <a className="pt-4" href={`mailto:${profile.email}`}>
            <Subtext description={`Email: ${profile.email}`} />
          </a>
       
      </div>
    </div>
    </>
  );
}
