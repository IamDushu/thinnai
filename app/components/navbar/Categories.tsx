"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { TbBeach, TbPool } from "react-icons/tb"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { BiRupee, BiCameraMovie } from "react-icons/bi"
import { BsArrowThroughHeart } from "react-icons/bs"
import {
  GiBoatFishing,
  GiCactus,
  GiCaveEntrance,
  GiForestCamp,
  GiVillage,
} from "react-icons/gi"
import { IoDiamond } from "react-icons/io5"
import { MdOutlineVilla } from "react-icons/md"

import CategoryBox from "../CategoryBox"
import Container from "../Container"

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This Thinnai is close to the beach!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This Thinnai is modern; perfect for those who are POSH!",
  },
  {
    label: "Village",
    icon: GiVillage,
    description:
      "This Thinnai is in a Village; Explore the greenery and pure souls!",
  },
  {
    label: "Indoor",
    icon: HiOutlineBuildingOffice2,
    description:
      "This Thinnai is inside; perfect if its hot and sunny outside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This Thinnai has a beautiful pool; dive and splash!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This Thinnai is brand new and luxurious!",
  },
  {
    label: "Budget",
    icon: BiRupee,
    description: "This Thinnai doesn't make a hole in your pocket!",
  },
  {
    label: "Cloud 9",
    icon: BsArrowThroughHeart,
    description: "This Thinnai is on Love!",
  },
  {
    label: "Movie Buff",
    icon: BiCameraMovie,
    description: "This Thinnai is equipped with a movie screen.",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This Thinnai offers camping activities!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This Thinnai is in the desert! Time to tan yourself",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This Thinnai is near a lake!",
  },
]

const Categories = () => {
  const params = useSearchParams()
  const category = params?.get("category")
  const pathname = usePathname()
  const isMainPage = pathname === "/"

  if (!isMainPage) {
    return null
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
