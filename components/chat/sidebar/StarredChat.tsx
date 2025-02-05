import Image, { StaticImageData } from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub , SiGitbook  } from "react-icons/si";

interface StarredChatProps {
  title: string;
  isStarred: boolean;
  onClick: () => void;
  onStar: (e: React.MouseEvent) => void;
}

export const StarredChat = ({ title, isStarred, onClick, onStar }: StarredChatProps) => (
  <motion.button 
    className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg group"
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="text-sm text-gray-700 truncate">{title}</span>
    <Star 
      className={`w-4 h-4 ${isStarred ? 'text-blue-500' : 'text-gray-300 opacity-0 group-hover:opacity-100'}`}
      onClick={(e) => {
        e.stopPropagation();
        onStar(e);
      }}
    />
  </motion.button>
);



interface SidebarHeaderProps {
  onNewChat: () => void;
  logo: StaticImageData;
}

export const SidebarHeader = ({ onNewChat, logo }: SidebarHeaderProps) => (
  <div className="p-4 border-b">
      <div className="flex items-center justify-between mb-10">
        <Image src={logo} alt="Almaze Logo" width={26}  />
        <div className="flex items-center space-x-4 mt-1">
          <a href="https://x.com/almaze_ai" target='_blank'>
            <RiTwitterXLine className='cursor-pointer text-gray-600 hover:text-gray-800 transition-colors'/>
          </a>
          <a href="https://almaze.gitbook.io/docs/" target='_blank'>
            <SiGitbook className='cursor-pointer text-gray-600 hover:text-gray-800 transition-colors'/>
          </a>
          <a href="https://github.com/Almaze-Labs" target='_blank'>
            <SiGithub className='cursor-pointer text-gray-600 hover:text-gray-800 transition-colors'/>
          </a>
        </div>
      </div>
    
    <button 
      onClick={onNewChat}
      className="w-full py-4 text-[#F3BA2F] border-2 border-dashed border-blue-200 rounded-lg bg-gradient-to-t from-[rgba(29,162,255,0.2)] to-[rgba(29,162,255,0)] hover:bg-blue-50 transition-colors text-sm"
    >
      ⊕ Start a new chat
    </button>
  </div>
);