import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../../assets/atus-logo 1.png";
import useMediaQuery from "../../hooks/usemediaquery";

const Navbar = () => {
  const [ismenutoggled, setismenutoggled] = useState<boolean>(false);
  const isabovemedium = useMediaQuery("(min-width: 1060px)");
  return (
    <nav className="bg-white h-28">
      <div className="container  flex mx-auto justify-between items-center py-5 px-5">
        <div className="h-full w-full md:h-full md:w-full lg:h-[51px] lg:w-[150px] lg:pl-[54px]  pt-4">
          <img src={logo} alt="Logo" />
        </div>
        {isabovemedium ? (
          <ul className="hidden md:flex text-nowrap mr-5 md:gap-4 md:-pl-[300px] md:text-[12px]  lg:-pl-[100px] lg:gap-12 lg:text-sm font-medium pl-[54px] pr-3 pt-[20px]">
            <li>
              <a href="#" className="">
                OFFERINGS
              </a>
            </li>
            <li>
              <a href="#" className="">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#" className="">
                FOUNDER'S NOTE
              </a>
            </li>
            <li>
              <a href="#" className="">
                ÁTUS GALLERY
              </a>
            </li>
            <li>
              <a href="#" className="">
                PRODUCT CATALOG
              </a>
            </li>
            <li>
              <a href="#" className="">
                ARCHIVES
              </a>
            </li>
            <li>
              <a href="#" className="">
                CONTACT
              </a>
            </li>
            <li>
              <div className="text-gray-600 items-start pr-6">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7555 15.3189C21.6618 15.2417 21.5402 15.2027 21.4169 15.2104C21.2935 15.2181 21.1783 15.2718 21.0958 15.36C21.0134 15.4482 20.9704 15.5638 20.976 15.6821C20.9816 15.8003 21.0355 15.9117 21.1259 15.9924L21.7789 16.552H18.0761C17.9525 16.5543 17.8348 16.6029 17.7483 16.6874C17.6618 16.7719 17.6133 16.8856 17.6133 17.0039C17.6133 17.1223 17.6618 17.2359 17.7483 17.3204C17.8349 17.4049 17.9526 17.4535 18.0761 17.4558H21.7788L21.1259 18.0152C21.0326 18.0952 20.9763 18.2073 20.9694 18.327C20.9625 18.4467 21.0055 18.5641 21.089 18.6534C21.1725 18.7427 21.2896 18.7966 21.4146 18.8032C21.5396 18.8099 21.6622 18.7687 21.7555 18.6887L23.3285 17.3406C23.3776 17.298 23.4168 17.246 23.4436 17.188C23.4704 17.1301 23.4842 17.0673 23.4842 17.0039C23.4842 16.9405 23.4704 16.8778 23.4436 16.8198C23.4168 16.7618 23.3776 16.7098 23.3285 16.6672L21.7555 15.3189Z"
                    fill="#7F7F7F"
                  />
                  <path
                    d="M20.4367 11.7761C19.6546 11.7761 18.8822 11.9477 18.1743 12.2787C17.4663 12.6097 16.8403 13.092 16.3408 13.6913L14.9218 13.2201C19.6852 10.7727 18.0334 3.59781 12.5993 3.52734C7.16467 3.60064 5.51302 10.7696 10.277 13.22L6.16755 14.5804C5.29107 14.8709 4.52883 15.4291 3.98912 16.1758C3.44942 16.9224 3.1597 17.8195 3.16114 18.7395V20.7556C3.16107 21.1785 3.32944 21.5841 3.62931 21.8835C3.92917 22.1829 4.33604 22.3516 4.76064 22.3526H19.7733C19.9933 22.3815 20.2148 22.3968 20.4367 22.3982C27.508 22.1081 27.5123 12.068 20.4367 11.7761ZM8.41531 8.65259C8.41658 7.5478 8.8578 6.48862 9.6422 5.70742C10.4266 4.92622 11.4901 4.48678 12.5994 4.48552C18.1461 4.70423 18.1445 12.6018 12.5994 12.8197C11.4901 12.8184 10.4266 12.3789 9.64217 11.5977C8.85779 10.8165 8.41657 9.75738 8.41531 8.65259ZM4.76064 21.3945C4.59112 21.3937 4.4288 21.3261 4.3093 21.2063C4.1898 21.0866 4.12287 20.9245 4.12319 20.7556V18.7395C4.12193 18.0207 4.34815 17.3197 4.76971 16.7363C5.19127 16.1528 5.78673 15.7165 6.47148 15.4894L10.7171 14.084C12.4233 13.4615 14.1548 13.8967 15.7752 14.5137C15.1511 15.6529 14.9646 16.9794 15.2505 18.2456C15.5364 19.5117 16.2752 20.631 17.329 21.3944L4.76064 21.3945ZM20.4367 21.4401C19.2779 21.4388 18.1669 20.9799 17.3475 20.1638C16.528 19.3478 16.0671 18.2414 16.0657 17.0873C16.295 11.3168 24.5788 11.3179 24.8073 17.0873C24.8059 18.2413 24.345 19.3477 23.5257 20.1637C22.7063 20.9797 21.5954 21.4387 20.4367 21.4401Z"
                    fill="#7F7F7F"
                  />
                  <path
                    d="M14 0.831543C11.2311 0.831543 8.52431 1.64844 6.22202 3.17892C3.91973 4.70941 2.12532 6.88474 1.06569 9.42984C0.00606604 11.9749 -0.271181 14.7755 0.269012 17.4774C0.809205 20.1792 2.14258 22.6611 4.10051 24.609C6.05845 26.5569 8.55301 27.8835 11.2687 28.4209C13.9845 28.9584 16.7994 28.6825 19.3576 27.6283C21.9157 26.5741 24.1022 24.7889 25.6406 22.4983C27.1789 20.2078 28 17.5149 28 14.7601C27.9958 11.0673 26.5194 7.52695 23.8948 4.91575C21.2702 2.30456 17.7117 0.835747 14 0.831543ZM14 27.728C11.422 27.728 8.90194 26.9674 6.75843 25.5425C4.61492 24.1176 2.94426 22.0922 1.95771 19.7227C0.971165 17.3531 0.713039 14.7457 1.21598 12.2301C1.71892 9.71461 2.96033 7.40394 4.78323 5.59035C6.60614 3.77675 8.92866 2.54168 11.4571 2.04131C13.9855 1.54093 16.6063 1.79774 18.9881 2.77925C21.3698 3.76077 23.4055 5.4229 24.8378 7.55546C26.27 9.68803 27.0345 12.1952 27.0345 14.7601C27.0306 18.1982 25.656 21.4943 23.2124 23.9254C20.7688 26.3566 17.4558 27.7241 14 27.728Z"
                    fill="#7F7F7F"
                  />
                </svg>
              </div>
            </li>
          </ul>
        ) : (
          <button
            className="rounded-full bg-white"
            onClick={() => setismenutoggled(!ismenutoggled)}
          >
            <FiMenu className="h-14 w-14 pr-[10px] pt-[20px] "></FiMenu>
          </button>
        )}
      </div>
      {/* mobile menu  */}
      {!isabovemedium && ismenutoggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setismenutoggled(!ismenutoggled)}>
              <FiX className="h-10 w-10 text-brown"></FiX>
            </button>
          </div>
          {/* menu items */}
          <ul className="flex flex-col gap-8 pl-5 justify-between items-center">
            <li>
              <a href="#" className="border-b-2 w-26  border-b-black pb-3 ">
                OFFERINGS
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 w-26  border-b-black pb-3 ">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 w-26  border-b-black pb-3 ">
                FOUNDER'S NOTE
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 w-26  border-b-black pb-3 ">
                ÁTUS GALLERY
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 w-26  border-b-black pb-3 ">
                PRODUCT CATALOG
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 w-26  border-b-black pb-3 ">
                ARCHIVES
              </a>
            </li>
            <li>
              <a href="#" className="border-b-2 w-26  border-b-black pb-3 ">
                CONTACT
              </a>
            </li>
            <li>
              <div className="text-gray-600 items-start pr-6">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7555 15.3189C21.6618 15.2417 21.5402 15.2027 21.4169 15.2104C21.2935 15.2181 21.1783 15.2718 21.0958 15.36C21.0134 15.4482 20.9704 15.5638 20.976 15.6821C20.9816 15.8003 21.0355 15.9117 21.1259 15.9924L21.7789 16.552H18.0761C17.9525 16.5543 17.8348 16.6029 17.7483 16.6874C17.6618 16.7719 17.6133 16.8856 17.6133 17.0039C17.6133 17.1223 17.6618 17.2359 17.7483 17.3204C17.8349 17.4049 17.9526 17.4535 18.0761 17.4558H21.7788L21.1259 18.0152C21.0326 18.0952 20.9763 18.2073 20.9694 18.327C20.9625 18.4467 21.0055 18.5641 21.089 18.6534C21.1725 18.7427 21.2896 18.7966 21.4146 18.8032C21.5396 18.8099 21.6622 18.7687 21.7555 18.6887L23.3285 17.3406C23.3776 17.298 23.4168 17.246 23.4436 17.188C23.4704 17.1301 23.4842 17.0673 23.4842 17.0039C23.4842 16.9405 23.4704 16.8778 23.4436 16.8198C23.4168 16.7618 23.3776 16.7098 23.3285 16.6672L21.7555 15.3189Z"
                    fill="#7F7F7F"
                  />
                  <path
                    d="M20.4367 11.7761C19.6546 11.7761 18.8822 11.9477 18.1743 12.2787C17.4663 12.6097 16.8403 13.092 16.3408 13.6913L14.9218 13.2201C19.6852 10.7727 18.0334 3.59781 12.5993 3.52734C7.16467 3.60064 5.51302 10.7696 10.277 13.22L6.16755 14.5804C5.29107 14.8709 4.52883 15.4291 3.98912 16.1758C3.44942 16.9224 3.1597 17.8195 3.16114 18.7395V20.7556C3.16107 21.1785 3.32944 21.5841 3.62931 21.8835C3.92917 22.1829 4.33604 22.3516 4.76064 22.3526H19.7733C19.9933 22.3815 20.2148 22.3968 20.4367 22.3982C27.508 22.1081 27.5123 12.068 20.4367 11.7761ZM8.41531 8.65259C8.41658 7.5478 8.8578 6.48862 9.6422 5.70742C10.4266 4.92622 11.4901 4.48678 12.5994 4.48552C18.1461 4.70423 18.1445 12.6018 12.5994 12.8197C11.4901 12.8184 10.4266 12.3789 9.64217 11.5977C8.85779 10.8165 8.41657 9.75738 8.41531 8.65259ZM4.76064 21.3945C4.59112 21.3937 4.4288 21.3261 4.3093 21.2063C4.1898 21.0866 4.12287 20.9245 4.12319 20.7556V18.7395C4.12193 18.0207 4.34815 17.3197 4.76971 16.7363C5.19127 16.1528 5.78673 15.7165 6.47148 15.4894L10.7171 14.084C12.4233 13.4615 14.1548 13.8967 15.7752 14.5137C15.1511 15.6529 14.9646 16.9794 15.2505 18.2456C15.5364 19.5117 16.2752 20.631 17.329 21.3944L4.76064 21.3945ZM20.4367 21.4401C19.2779 21.4388 18.1669 20.9799 17.3475 20.1638C16.528 19.3478 16.0671 18.2414 16.0657 17.0873C16.295 11.3168 24.5788 11.3179 24.8073 17.0873C24.8059 18.2413 24.345 19.3477 23.5257 20.1637C22.7063 20.9797 21.5954 21.4387 20.4367 21.4401Z"
                    fill="#7F7F7F"
                  />
                  <path
                    d="M14 0.831543C11.2311 0.831543 8.52431 1.64844 6.22202 3.17892C3.91973 4.70941 2.12532 6.88474 1.06569 9.42984C0.00606604 11.9749 -0.271181 14.7755 0.269012 17.4774C0.809205 20.1792 2.14258 22.6611 4.10051 24.609C6.05845 26.5569 8.55301 27.8835 11.2687 28.4209C13.9845 28.9584 16.7994 28.6825 19.3576 27.6283C21.9157 26.5741 24.1022 24.7889 25.6406 22.4983C27.1789 20.2078 28 17.5149 28 14.7601C27.9958 11.0673 26.5194 7.52695 23.8948 4.91575C21.2702 2.30456 17.7117 0.835747 14 0.831543ZM14 27.728C11.422 27.728 8.90194 26.9674 6.75843 25.5425C4.61492 24.1176 2.94426 22.0922 1.95771 19.7227C0.971165 17.3531 0.713039 14.7457 1.21598 12.2301C1.71892 9.71461 2.96033 7.40394 4.78323 5.59035C6.60614 3.77675 8.92866 2.54168 11.4571 2.04131C13.9855 1.54093 16.6063 1.79774 18.9881 2.77925C21.3698 3.76077 23.4055 5.4229 24.8378 7.55546C26.27 9.68803 27.0345 12.1952 27.0345 14.7601C27.0306 18.1982 25.656 21.4943 23.2124 23.9254C20.7688 26.3566 17.4558 27.7241 14 27.728Z"
                    fill="#7F7F7F"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
