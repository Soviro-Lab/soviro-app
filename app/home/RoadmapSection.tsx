"use client";
import { TypingAnimation } from "@/components/home/magicui/typing-animation";
import Image from "next/image";
import img1 from "@/public/assets/images/roadmap-section-1.png";
import Link from "next/link";
import { FlickeringGrid } from "@/components/home/magicui/flickering-grid";
import { motion } from "framer-motion";

export default function RoadmapSection() {
  return (
    <section className="py-36">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="mx-auto container max-w-[1128px] px-8"
      >
        <div className="relative bg-[#001A2C] rounded-xl">
          <div className="relative z-10">
            <div className="p-16 pb-8 grid grid-cols-2 items-center gap-12">
              <div className="flex flex-col items-start">
                <p className="mb-3 font-serif text-sm uppercase text-white">
                  Roadmap
                </p>

                <h2 className="mb-1.5 min-h-[80px] font-offbit text-4xl uppercase text-white">
                  <TypingAnimation startOnView={false}>
                    WE HAVE BIG PLANS FOR Soviro IN 2025
                  </TypingAnimation>
                </h2>

                <p className="mb-5 text-white/75">
                  Discover our strategic roadmap for 2025, outlining key phases and milestones designed to drive innovation and growth for Soviro.
                </p>

                <div className="h-[42px] px-1.5 border border-white/50 rounded-md flex items-center">
                  <a href="https://sovirolabs.gitbook.io/" target="_blank">
                    <button className="py-1.5 px-5 bg-white rounded-full flex items-center gap-2 text-sm font-medium text-[#001A2C]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        href="https://sovirolabs.gitbook.io/"
                      >
                        <g clipPath="url(#clip0_1_784)">
                          <path
                            d="M6.3921 8.00633C7.05703 8.3901 7.38949 8.58199 7.75463 8.58231C8.11974 8.58263 8.45254 8.39133 9.11815 8.00871L13.361 5.56978C13.5526 5.45968 13.6706 5.2556 13.6706 5.03466C13.6706 4.81373 13.5526 4.60964 13.361 4.49954L9.11662 2.05973C8.45173 1.67753 8.11928 1.48643 7.75452 1.48657C7.38974 1.48671 7.05746 1.67807 6.39286 2.06079L2.74409 4.16201C2.71704 4.17759 2.70352 4.18536 2.69091 4.19274C1.44452 4.92238 0.674463 6.25445 0.664167 7.69867C0.664062 7.71327 0.664062 7.72886 0.664062 7.76008C0.664062 7.79125 0.664062 7.80683 0.664166 7.82141C0.67444 9.26401 1.44278 10.5948 2.68695 11.325C2.69953 11.3324 2.71302 11.3402 2.74003 11.3558L5.02562 12.6754C6.35742 13.4444 7.02331 13.8288 7.75458 13.8291C8.48584 13.8294 9.15201 13.4453 10.4843 12.6773L12.8971 11.2864C13.5642 10.9018 13.8977 10.7095 14.0809 10.3925C14.2641 10.0755 14.2641 9.69052 14.2641 8.92048V7.43294C14.2641 7.21931 14.1484 7.02245 13.9617 6.9185C13.7811 6.81792 13.561 6.81941 13.3818 6.92243L8.43443 9.76631C8.10251 9.95714 7.93653 10.0525 7.75439 10.0526C7.57228 10.0526 7.40625 9.95733 7.0742 9.76674L3.72571 7.84463C3.55798 7.74835 3.47411 7.7002 3.40675 7.69151C3.25318 7.6717 3.10551 7.75772 3.04701 7.9011C3.02136 7.96399 3.02187 8.06068 3.02291 8.25408C3.02367 8.39648 3.02406 8.46766 3.03736 8.53313C3.06717 8.67978 3.14431 8.81257 3.25696 8.91107C3.30726 8.95505 3.3689 8.99065 3.49222 9.06181L7.07231 11.1281C7.40523 11.3202 7.57168 11.4163 7.75446 11.4164C7.93725 11.4164 8.10376 11.3204 8.43677 11.1285L12.8249 8.59899C12.9386 8.53341 12.9955 8.50064 13.0382 8.52527C13.0808 8.54992 13.0808 8.61556 13.0808 8.74687V9.42158C13.0808 9.6141 13.0808 9.71034 13.035 9.7896C12.9892 9.86884 12.9058 9.91693 12.739 10.0131L9.11971 12.0994C8.45339 12.4835 8.12023 12.6755 7.75454 12.6754C7.38883 12.6752 7.05584 12.4829 6.38989 12.0981L3.00368 10.1421C2.99293 10.1359 2.98755 10.1327 2.98254 10.1298C2.27254 9.71493 1.83444 8.95592 1.83033 8.13359C1.8303 8.12779 1.8303 8.12158 1.8303 8.10915V7.4898C1.8303 7.03584 2.07207 6.61626 2.46483 6.38861C2.81188 6.18743 3.23996 6.18703 3.58737 6.38756L6.3921 8.00633Z"
                            fill="#001A2C"
                        </g>
                        <defs>
                          <clipPath id="clip0_1_784">
                            <rect
                              width="13.8125"
                              height="13.8125"
                              fill="white"
                              transform="translate(0.570312 0.734619)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Open Gitbook
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex">
                <Image src={img1} alt="" className="w-full" />
              </div>
            </div>

            <div className="px-16 grid grid-cols-4">
              <div className="pb-6 pr-6 border-r border-dashed border-white/50">
                <svg
                  width="27"
                  height="27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.015 2.36791C12.4661 2.10614 12.9784 1.96826 13.5 1.96826C14.0216 1.96826 14.5339 2.10614 14.985 2.36791L14.9861 2.36904L22.4235 6.64404C22.8755 6.90617 23.2505 7.28268 23.5107 7.73571C23.771 8.18874 23.9074 8.70231 23.9063 9.22479V17.7782C23.9052 18.2997 23.7677 18.812 23.5077 19.264C23.2476 19.7161 22.8738 20.0924 22.4235 20.3555L22.4201 20.3578L14.9861 24.6317H14.9839C14.5329 24.8932 14.0208 25.031 13.4994 25.031C12.9781 25.031 12.466 24.8932 12.015 24.6317H12.0139L4.57989 20.3567H4.57651C4.1243 20.0945 3.74915 19.7179 3.48885 19.2646C3.22854 18.8113 3.09227 18.2975 3.09376 17.7748V9.22254C3.09487 8.70097 3.23228 8.18875 3.49237 7.73666C3.75246 7.28457 4.12619 6.9083 4.57651 6.64517L4.57989 6.64292L12.015 2.36791ZM15.1875 8.99979C15.1876 8.84413 15.1446 8.69148 15.0633 8.55874C14.982 8.426 14.8656 8.31833 14.7269 8.24764C14.5882 8.17696 14.4327 8.14602 14.2775 8.15825C14.1223 8.17047 13.9735 8.22539 13.8476 8.31692L10.7539 10.5669C10.5728 10.6985 10.4514 10.8966 10.4163 11.1177C10.3813 11.3388 10.4356 11.5648 10.5671 11.7459C10.6987 11.927 10.8969 12.0484 11.118 12.0835C11.3391 12.1185 11.565 12.0642 11.7461 11.9327L13.5011 10.6569V17.9998C13.5011 18.2236 13.59 18.4382 13.7483 18.5964C13.9065 18.7546 14.1211 18.8435 14.3449 18.8435C14.5687 18.8435 14.7833 18.7546 14.9415 18.5964C15.0997 18.4382 15.1886 18.2236 15.1886 17.9998L15.1875 8.99979Z"
                    fill="#F3BA2F"
                  />
                </svg>

                <p className="mt-3 mb-2 text-xs font-medium text-[#F3BA2F]">
                  Q1 2025
                </p>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  Phase 01
                </h3>

                <p className="text-sm text-white/75">
                  In this phase, we will focus on enhancing our core features and improving user experience to ensure a seamless interaction with our platform.
                </p>
              </div>

              <div className="pb-6 px-6 border-r border-dashed border-white/50">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.265 2.36791C12.7161 2.10614 13.2284 1.96826 13.75 1.96826C14.2716 1.96826 14.7839 2.10614 15.235 2.36791L15.2361 2.36904L22.6735 6.64404C23.1255 6.90617 23.5005 7.28268 23.7607 7.73571C24.021 8.18874 24.1574 8.70231 24.1563 9.22479V17.7782C24.1552 18.2997 24.0177 18.812 23.7577 19.264C23.4976 19.7161 23.1238 20.0924 22.6735 20.3555L22.6701 20.3578L15.2361 24.6317H15.2339C14.7829 24.8932 14.2708 25.031 13.7494 25.031C13.2281 25.031 12.716 24.8932 12.265 24.6317H12.2639L4.82989 20.3567H4.82651C4.3743 20.0945 3.99915 19.7179 3.73885 19.2646C3.47854 18.8113 3.34227 18.2975 3.34376 17.7748V9.22254C3.34487 8.70097 3.48228 8.18875 3.74237 7.73666C4.00246 7.28457 4.37619 6.9083 4.82651 6.64517L4.82989 6.64292L12.265 2.36791ZM11.7813 11.6289C11.7813 10.9775 12.0141 10.5534 12.3134 10.2845C12.6273 10.0022 13.0671 9.84354 13.534 9.84354C13.9998 9.84354 14.4408 10.001 14.7546 10.2845C15.0528 10.5534 15.2856 10.9775 15.2856 11.6289C15.2856 12.5987 14.6511 13.6213 13.6094 14.6709C12.8309 15.4562 11.9399 16.148 11.14 16.7679C10.8858 16.9659 10.6394 17.1572 10.4088 17.3417C10.2724 17.4511 10.1734 17.6001 10.1254 17.7682C10.0774 17.9363 10.0828 18.1151 10.1409 18.28C10.1989 18.4449 10.3068 18.5876 10.4495 18.6886C10.5922 18.7896 10.7627 18.8437 10.9375 18.8435H16.5625C16.7863 18.8435 17.0009 18.7546 17.1591 18.5964C17.3174 18.4382 17.4063 18.2236 17.4063 17.9998C17.4063 17.776 17.3174 17.5614 17.1591 17.4032C17.0009 17.2449 16.7863 17.156 16.5625 17.156H13.3675C13.8546 16.7544 14.353 16.3179 14.8075 15.8589C15.9123 14.7452 16.9731 13.304 16.9731 11.6289C16.9731 10.5264 16.5569 9.63767 15.883 9.03017C15.2226 8.43616 14.3654 8.15604 13.534 8.15604C12.7015 8.15604 11.8443 8.43616 11.1839 9.03017C10.5089 9.63767 10.0938 10.5264 10.0938 11.6289C10.0938 11.8527 10.1827 12.0673 10.3409 12.2255C10.4991 12.3838 10.7137 12.4727 10.9375 12.4727C11.1613 12.4727 11.3759 12.3838 11.5341 12.2255C11.6924 12.0673 11.7813 11.8527 11.7813 11.6289Z"
                    fill="#F3BA2F"
                  />
                </svg>

                <p className="mt-3 mb-2 text-xs font-medium text-[#F3BA2F]">
                  Q2 2025
                </p>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  Phase 02
                </h3>

                <p className="text-sm text-white/75">
                  During this phase, we will expand our platform&apos;s capabilities by integrating advanced analytics and machine learning features to provide deeper insights and more personalized experiences for our users.
                </p>
              </div>

              <div className="pb-6 px-6 border-r border-dashed border-white/50">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.265 2.36791C12.7161 2.10614 13.2284 1.96826 13.75 1.96826C14.2716 1.96826 14.7839 2.10614 15.235 2.36791L15.2361 2.36904L22.6735 6.64404C23.1255 6.90617 23.5005 7.28268 23.7607 7.73571C24.021 8.18874 24.1574 8.70231 24.1563 9.22479V17.7782C24.1552 18.2997 24.0177 18.812 23.7577 19.264C23.4976 19.7161 23.1238 20.0924 22.6735 20.3555L22.6701 20.3578L15.2361 24.6317H15.2339C14.7829 24.8932 14.2708 25.031 13.7494 25.031C13.2281 25.031 12.716 24.8932 12.265 24.6317H12.2639L4.82989 20.3567H4.82651C4.3743 20.0945 3.99915 19.7179 3.73885 19.2646C3.47854 18.8113 3.34227 18.2975 3.34376 17.7748V9.22254C3.34487 8.70097 3.48228 8.18875 3.74237 7.73666C4.00246 7.28457 4.37619 6.9083 4.82651 6.64517L4.82989 6.64292L12.265 2.36791ZM11.7813 11.6289C11.7813 10.9775 12.0141 10.5534 12.3134 10.2845C12.6273 10.0022 13.0671 9.84354 13.534 9.84354C13.9998 9.84354 14.4408 10.001 14.7546 10.2845C15.0528 10.5534 15.2856 10.9775 15.2856 11.6289C15.2856 12.5987 14.6511 13.6213 13.6094 14.6709C12.8309 15.4562 11.9399 16.148 11.14 16.7679C10.8858 16.9659 10.6394 17.1572 10.4088 17.3417C10.2724 17.4511 10.1734 17.6001 10.1254 17.7682C10.0774 17.9363 10.0828 18.1151 10.1409 18.28C10.1989 18.4449 10.3068 18.5876 10.4495 18.6886C10.5922 18.7896 10.7627 18.8437 10.9375 18.8435H16.5625C16.7863 18.8435 17.0009 18.7546 17.1591 18.5964C17.3174 18.4382 17.4063 18.2236 17.4063 17.9998C17.4063 17.776 17.3174 17.5614 17.1591 17.4032C17.0009 17.2449 16.7863 17.156 16.5625 17.156H13.3675C13.8546 16.7544 14.353 16.3179 14.8075 15.8589C15.9123 14.7452 16.9731 13.304 16.9731 11.6289C16.9731 10.5264 16.5569 9.63767 15.883 9.03017C15.2226 8.43616 14.3654 8.15604 13.534 8.15604C12.7015 8.15604 11.8443 8.43616 11.1839 9.03017C10.5089 9.63767 10.0938 10.5264 10.0938 11.6289C10.0938 11.8527 10.1827 12.0673 10.3409 12.2255C10.4991 12.3838 10.7137 12.4727 10.9375 12.4727C11.1613 12.4727 11.3759 12.3838 11.5341 12.2255C11.6924 12.0673 11.7813 11.8527 11.7813 11.6289Z"
                    fill="#F3BA2F"
                  />
                </svg>

                <p className="mt-3 mb-2 text-xs font-medium text-[#F3BA2F]">
                  Q3 2025
                </p>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  Phase 03
                </h3>

                <p className="text-sm text-white/75">
                  In this phase, we will focus on expanding our market reach and establishing strategic partnerships to drive growth and enhance our platform&apos;s value proposition.
                </p>
              </div>

              <div className="pb-6 pl-6">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.765 2.36791C13.2161 2.10614 13.7284 1.96826 14.25 1.96826C14.7716 1.96826 15.2839 2.10614 15.735 2.36791L15.7361 2.36904L23.1735 6.64404C23.6255 6.90617 24.0005 7.28268 24.2607 7.73571C24.521 8.18874 24.6574 8.70231 24.6563 9.22479V17.7782C24.6552 18.2997 24.5177 18.812 24.2577 19.264C23.9976 19.7161 23.6238 20.0924 23.1735 20.3555L23.1701 20.3578L15.7361 24.6317H15.7339C15.2829 24.8932 14.7708 25.031 14.2494 25.031C13.7281 25.031 13.216 24.8932 12.765 24.6317H12.7639L5.32989 20.3567H5.32651C4.8743 20.0945 4.49915 19.7179 4.23885 19.2646C3.97854 18.8113 3.84227 18.2975 3.84376 17.7748V9.22254C3.84487 8.70097 3.98228 8.18875 4.24237 7.73666C4.50246 7.28457 4.87619 6.9083 5.32651 6.64517L5.32989 6.64292L12.765 2.36791ZM15.7193 9.22591C15.7506 9.11868 15.7603 9.00629 15.7478 8.89528C15.7354 8.78426 15.701 8.67682 15.6467 8.57919C15.5924 8.48157 15.5192 8.3957 15.4315 8.32656C15.3437 8.25743 15.2431 8.20641 15.1355 8.17647C15.0279 8.14653 14.9154 8.13826 14.8045 8.15214C14.6937 8.16602 14.5867 8.20178 14.4898 8.25733C14.3928 8.31289 14.3079 8.38713 14.2399 8.47577C14.1719 8.5644 14.1222 8.66566 14.0936 8.77366C13.6628 10.3239 12.7886 11.7774 11.9978 12.8619C11.5851 13.4272 11.14 13.9681 10.6646 14.4819C10.6378 14.5102 10.6108 14.5384 10.5836 14.5663L10.5634 14.5865L10.5589 14.591C10.441 14.7091 10.3607 14.8595 10.3282 15.0232C10.2958 15.1868 10.3126 15.3565 10.3765 15.5106C10.4405 15.6647 10.5487 15.7964 10.6875 15.8891C10.8263 15.9817 10.9894 16.0311 11.1563 16.031H14.5313V17.9998C14.5313 18.2236 14.6202 18.4382 14.7784 18.5964C14.9366 18.7546 15.1512 18.8435 15.375 18.8435C15.5988 18.8435 15.8134 18.7546 15.9716 18.5964C16.1299 18.4382 16.2188 18.2236 16.2188 17.9998V16.031H16.7813C17.005 16.031 17.2196 15.9421 17.3779 15.7839C17.5361 15.6257 17.625 15.4111 17.625 15.1873C17.625 14.9635 17.5361 14.7489 17.3779 14.5907C17.2196 14.4324 17.005 14.3435 16.7813 14.3435H16.2188V13.4998C16.2188 13.276 16.1299 13.0614 15.9716 12.9032C15.8134 12.7449 15.5988 12.656 15.375 12.656C15.1512 12.656 14.9366 12.7449 14.7784 12.9032C14.6202 13.0614 14.5313 13.276 14.5313 13.4998V14.3435H12.9945C13.1126 14.1917 13.2364 14.0285 13.3613 13.8564C14.2106 12.692 15.2119 11.0507 15.7193 9.22591Z"
                    fill="#F3BA2F"
                  />
                </svg>

                <p className="mt-3 mb-2 text-xs font-medium text-[#F3BA2F]">
                  Q4 2025
                </p>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  Phase 04
                </h3>

                <p className="text-sm text-white/75">
                  This phase will focus on launching new features and services, enhancing our platform&apos;s scalability, and ensuring robust security measures to protect user data.
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-white/50 py-6 px-16 flex justify-between items-center">
              <p className="text-white/75">Learn more about Soviro here</p>

              <div className="flex items-center gap-3">
                <Link
                  href={"https://x.com/soviro_labs"}
                  target="_blank"
                  className="px-4 h-[42px] border border-white/25 rounded-md flex justify-center items-center gap-2.5 text-sm font-medium text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2718 1.58643H18.0831L11.9413 8.606L19.1666 18.1581H13.5093L9.07828 12.3648L4.00821 18.1581H1.19528L7.76445 10.6498L0.833252 1.58643H6.63418L10.6394 6.8817L15.2718 1.58643ZM14.2852 16.4754H15.8429L5.78775 3.1807H4.11614L14.2852 16.4754Z"
                      fill="white"
                    />
                  </svg>
                  Twitter/X
                </Link>

                <Link
                  href={"https://sovirolabs.gitbook.io/"}
                  target="_blank"
                  className="px-4 h-[42px] border border-white/25 rounded-md flex justify-center items-center gap-2.5 text-sm font-medium text-white"
                >
                  Gitbook
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.4297 10.5294C9.3925 11.085 9.87388 11.3629 10.4026 11.3634C10.9313 11.3638 11.4131 11.0868 12.3769 10.5328L18.5205 7.00132C18.7978 6.84191 18.9688 6.5464 18.9688 6.22649C18.9688 5.90659 18.7978 5.61108 18.5205 5.45166L12.3747 1.9189C11.412 1.36549 10.9306 1.08878 10.4024 1.08899C9.87425 1.0892 9.39311 1.36628 8.43081 1.92044L3.14751 4.96293C3.10835 4.98548 3.08878 4.99674 3.07052 5.00742C1.26579 6.06391 0.150771 7.99271 0.135862 10.0839C0.135712 10.105 0.135712 10.1276 0.135712 10.1728C0.135712 10.2179 0.135712 10.2405 0.135862 10.2616C0.150738 12.3504 1.26327 14.2774 3.06479 15.3347C3.08299 15.3454 3.10253 15.3567 3.14164 15.3793L6.45108 17.2901C8.37948 18.4035 9.34367 18.9602 10.4025 18.9605C11.4614 18.9609 12.4259 18.4048 14.3551 17.2927L17.8487 15.2788C18.8146 14.7219 19.2976 14.4435 19.5628 13.9845C19.828 13.5255 19.828 12.968 19.828 11.853V9.69911C19.828 9.38979 19.6605 9.10474 19.3903 8.95422C19.1287 8.80859 18.81 8.81074 18.5505 8.95991L11.3869 13.0778C10.9063 13.3541 10.666 13.4922 10.4023 13.4923C10.1386 13.4923 9.89816 13.3543 9.41736 13.0784L4.56887 10.2952C4.32601 10.1558 4.20456 10.0861 4.10702 10.0735C3.88465 10.0448 3.67084 10.1694 3.58613 10.377C3.54899 10.4681 3.54973 10.6081 3.55124 10.8881C3.55235 11.0943 3.5529 11.1974 3.57216 11.2922C3.61533 11.5045 3.72702 11.6968 3.89013 11.8394C3.96296 11.9031 4.05222 11.9546 4.23078 12.0577L9.41462 15.0496C9.89668 15.3278 10.1377 15.4669 10.4023 15.467C10.667 15.467 10.9081 15.3281 11.3903 15.0501L17.7442 11.3875C17.9089 11.2926 17.9912 11.2451 18.053 11.2808C18.1147 11.3165 18.1147 11.4115 18.1147 11.6016V12.5786C18.1147 12.8574 18.1147 12.9967 18.0484 13.1115C17.9821 13.2262 17.8614 13.2958 17.6199 13.435L12.3792 16.456C11.4144 17.0121 10.932 17.2902 10.4025 17.2899C9.87293 17.2897 9.39078 17.0112 8.4265 16.4542L3.52339 13.6218C3.50782 13.6128 3.50004 13.6083 3.49278 13.6041C2.46472 13.0034 1.83037 11.9043 1.82442 10.7136C1.82438 10.7052 1.82438 10.6962 1.82438 10.6782V9.78145C1.82438 9.12412 2.17446 8.51659 2.74315 8.18696C3.24567 7.89566 3.86551 7.89508 4.36856 8.18545L8.4297 10.5294Z"
                      fill="white"
                    />
                  </svg>
                </Link>

                <Link
                  href={"https://github.com/Soviro-Lab"}
                  target="_blank"
                  className="px-4 h-[42px] border border-white/25 rounded-md flex justify-center items-center gap-2.5 text-sm font-medium text-white"
                >
                  Github
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_695)">
                      <mask
                        id="mask0_1_695"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M19.4737 0.526367H0.526367V19.4737H19.4737V0.526367Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1_695)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0001 0.526367C4.76584 0.526367 0.526367 4.76584 0.526367 10.0001C0.526367 14.1922 3.23821 17.733 7.004 18.9883C7.47768 19.0711 7.65531 18.7869 7.65531 18.5383C7.65531 18.3132 7.64347 17.5672 7.64347 16.7737C5.26321 17.2119 4.64742 16.1935 4.45795 15.6606C4.35137 15.3883 3.88953 14.5474 3.48689 14.3225C3.15531 14.1448 2.68163 13.7067 3.47505 13.6948C4.2211 13.683 4.754 14.3816 4.93163 14.6658C5.78426 16.0988 7.1461 15.6962 7.69084 15.4474C7.77374 14.8316 8.02242 14.4172 8.29479 14.1804C6.18689 13.9435 3.98426 13.1264 3.98426 9.50268C3.98426 8.47242 4.35137 7.61979 4.95531 6.95663C4.86058 6.71979 4.529 5.74874 5.05005 4.4461C5.05005 4.4461 5.84347 4.19742 7.65531 5.41716C8.41321 5.204 9.21847 5.09742 10.0237 5.09742C10.829 5.09742 11.6343 5.204 12.3922 5.41716C14.2041 4.18558 14.9974 4.4461 14.9974 4.4461C15.5185 5.74874 15.1869 6.71979 15.0922 6.95663C15.6962 7.61979 16.0632 8.46058 16.0632 9.50268C16.0632 13.1383 13.8488 13.9435 11.7409 14.1804C12.0843 14.4764 12.3804 15.0448 12.3804 15.933C12.3804 17.2001 12.3685 18.2185 12.3685 18.5383C12.3685 18.7869 12.5462 19.083 13.0198 18.9883C16.7619 17.733 19.4737 14.1804 19.4737 10.0001C19.4737 4.76584 15.2343 0.526367 10.0001 0.526367Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_695">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={2}
            gridGap={5}
            color="#fff"
            maxOpacity={0.15}
            flickerChance={0.1}
            width={1064}
            height={766}
          />
        </div>
      </motion.div>
    </section>
  );
}
