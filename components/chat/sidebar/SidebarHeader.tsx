import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub , SiGitbook  } from "react-icons/si";
import Image, { StaticImageData } from 'next/image';

interface SidebarHeaderProps {
  onNewChat: () => void;
  logo: StaticImageData;
}

export const SidebarHeader = ({ onNewChat, logo }: SidebarHeaderProps) => (
    <div className="flex items-center justify-between mb-10">
      <Image src={logo} alt="Soviro Logo" width={26}  />
      <div className="flex items-center space-x-4 mt-1">
          <a href="https://x.com/soviro_labs" target='_blank'>
            <RiTwitterXLine className='cursor-pointer text-gray-600 hover:text-gray-800 transition-colors'/>
          </a>
          <a href="https://sovirolabs.gitbook.io/" target='_blank'>
            <SiGitbook className='cursor-pointer text-gray-600 hover:text-gray-800 transition-colors'/>
          </a>
            <SiGithub className='cursor-pointer text-gray-600 hover:text-gray-800 transition-colors'/>
          </a>
      </div>
    </div>
    
    <button 
      onClick={onNewChat}
      className="w-full py-4 text-[#F3BA2F] border-2 border-dashed border-[rgba(243,186,47,0.5)] rounded-lg bg-gradient-to-t from-[rgba(243,186,47,0.2)] to-[rgba(243,186,47,0)] hover:bg-[rgba(243,186,47,0.1)] transition-colors text-sm"
    >
      ⊕ Start a new chat
    </button>
  </div>
);