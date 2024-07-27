import { HomeIcon, NotepadText, ArrowRightLeft, Settings, LayoutGrid, Landmark, ScanLine, Link2, CreditCard, HandCoins, Tag, ArchiveRestore, BadgePercent, UsersRound, CircleUserRound } from "lucide-react"
import { useRef } from "react";

export function NavBar() {

    const divRef = useRef();

    const navItems = [{title: '',
    data: [{
        icon: <HomeIcon strokeWidth={'1'} />,
        name: 'Home'
    }, 
    {
        icon: <NotepadText strokeWidth={'1'} />,
        name: 'Orders'
    },
    {
        icon: <ArrowRightLeft strokeWidth={'1'} />,
        name: 'Transactions'
    },
    {
        icon: <Settings strokeWidth={'1'} />,
        name: 'Settings'
    },
    {
        icon: <LayoutGrid strokeWidth={'1'} />,
        name: 'Payouts'
    }]},
    {
       title: 'Paymnet Products',
       data: [
            {
                icon: <Landmark strokeWidth={'1'} />,
                name: 'Smart Collect'
            },
            {
                icon: <ScanLine strokeWidth={'1'} />,
                name: 'QR Codes'
            },
            {
                icon: <Link2 strokeWidth={'1'} />,
                name: 'Paymnet Links'
            }
        ]
    },
    {
       title: 'Banking Products',
       data:  [
            {
                icon: <CreditCard strokeWidth={'1'}/>,
                name: 'X Corporate Cards'
            },
            {
                icon: <HandCoins strokeWidth={'1'}/>,
                name: 'Cash Advance'
            }
        ]
    },
    
    {
        title: '',
        data: [
            {
                icon: <Tag strokeWidth={'1'} />,
                name: 'Offers'
            },
            {
                icon: <ArchiveRestore strokeWidth={'1'} />,
                name: 'Store'
            },
            {
                icon: <BadgePercent strokeWidth={'1'} />,
                name: 'Discounts'
            },
            {
                icon: <UsersRound strokeWidth={'1'}/>,
                name: 'Audience'
            }
        ],

        
    } 
];
    return <>

    <nav className="h-screen fixed w-60 py-5 bg-[#1e2640]">
        <div className="w-full grid grid-cols-12 place-items-center pl-3 pb-5 gap-3 border-b border-b-[rgba(255,255,255,0.3)]">
            <div className="col-span-3 rounded-full size-10 bg-white flex justify-center items-center">
                <CircleUserRound size={'40'} color="rgba(0,0,0,0.9)" strokeWidth="1" />
            </div>
            <div className=" col-span-9 w-full text-base font-medium text-white">Kanishk Mogalraj</div>
        </div>
        <div className="flex flex-col justify-center mt-3">
            {navItems.map((navItem, index) => {
                return <div>
                    {index > 0 && <div className={"text-[rgba(255,255,255,0.6)] text-sm mt-3 pt-5 px-5 font-medium uppercase border-t border-t-[rgba(255,255,255,0.3)] " + (navItem.title && "pb-2")}>{navItem.title}</div>}
                    {navItem.data.map(item => {
                        return <>
                        <NavItem icon={item.icon} name= {item.name} />
                        </>
                    })}
                </div>
                
            })}
        </div>
    </nav>
    </>
}


function NavItem({icon, name}) {
    return <div className="px-7 py-2 flex justify-start items-center gap-5 text-white">
        <div>{icon}</div>
        <div className="text-sm">{name}</div>
    </div>
} 