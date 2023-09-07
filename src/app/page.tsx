import Image from "next/image";
import EnergyIcon from '../../public/EnergyIcon.svg';
import UsedEnergyIcon from '../../public/UsedEnergyIcon.svg';

export default function Home() {
  return (
    <div className=" w-[1110px] H-[486.37px] flex justify-center ml-28 mt-20 space-x-[71.63px]">
        <div className="relative flex items-center">
            <div className="bg-[#F6A235] -ml-10 w-[428.82px] absolute -z-10 h-[285px]">
              {/* orange div */}

            </div>
            <div className="bg-[#1F1F1F] w-[486.37px] h-[486.37px] ">
              {/* Black div */}
            </div>
        </div>
        <div className="mt-10">
          {/* Text part */}
          <div className="w-[65.28px] h-[1.03px] bg-[#F6A235]"></div>
          <div className="text-gray-400 mt-[14px] font-[400px]">ECOLOGICAL WAY</div>
          <div className="mt-[10.8px] text-[44px] font-bold">
          Reshaping Energy for <br/> the <span className="text-[#F6A235]">Future</span>
          </div>
          <div className="mt[10px] text-[#333333]">
           Let’s Experience The Power Of The Sun. To ensure our World’s future children little girls, Act now tackling sun, wind and waters!
          </div>
          {/* ====================Images columns========================== */}
          <div className="mt-[33.45px] flex space-x-14">
              <div className="pr-5">
                <Image alt="EnergyIcon" src={EnergyIcon}/>
                <div>
                  <div className="font-bold">Reduce Your Daily Energy Use</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </div>

              <div className="pr-5">
                <Image alt="UsedEnergyIcon" src={UsedEnergyIcon}/>
                <div>
                  <div className="font-bold">Reduce Your Daily Energy Use</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
