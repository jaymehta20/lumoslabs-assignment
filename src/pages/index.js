import Head from 'next/head';
import Image from 'next/image';

import Slider from './slider';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { MdGroup, MdLocationPin } from 'react-icons/md';
import { BiFilterAlt } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx';
import { useEffect, useState } from 'react';

const cards = [
  {
    title: 'Dev media web3 conference',
    date: '31-08-2022',
    time: '6:00 PM IST',
    location: 'Global centre for conference',
    description:
      'Web3 development course for starters. Join the course now and avail 50 coins on your wallet.',
    image: '/image/dev.jpg',
    capacity: '200/500',
    host: 'web3house',
  },
  {
    title: 'Intro to Machine Learning',
    date: '15-06-2022',
    time: '2:00 PM EST',
    location: 'Online',
    description:
      'Learn the basics of machine learning and how to apply it to real-world problems. No prior experience required!',
    image: '/image/polygon.jpg',
    capacity: '100/100',
    host: 'learnweb3',
  },
  {
    title: 'UX Design Workshop',
    date: '22-07-2022',
    time: '9:00 AM PST',
    location: 'San Francisco, CA',
    description:
      'Join us for a hands-on workshop on user experience design. Learn the principles and practices of creating effective user interfaces.',
    image: '/image/metaverse.jpg',
    capacity: '50/50',
    host: 'hirehouse',
  },
  {
    title: 'Product Management Summit',
    date: '05-09-2022',
    time: '10:00 AM GMT',
    location: 'London, UK',
    description:
      'Join industry leaders and experts in product management to learn about the latest trends and best practices in the field.',
    image: '/image/dev.jpg',
    capacity: '300/500',
    host: 'web3house',
  },
  {
    title: 'Data Science Bootcamp',
    date: '12-10-2022',
    time: '8:00 AM EST',
    location: 'New York, NY',
    description:
      'Get hands-on experience with data science tools and techniques in this intensive bootcamp. No prior experience required!',
    image: '/image/polygon.jpg',
    capacity: '20/50',
    host: 'learnweb3',
  },
];

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filter, setFilter] = useState([]);
  const [filterCards, setFilterCards] = useState(cards);

  const onClickHandler = (e) => {
    const { value, name } = e.target;
    if (filter.includes(name)) {
      // Remove the name element from the filter array
      setFilter((prevFilter) => prevFilter.filter((item) => item !== name));
    } else {
      // Add the name element to the filter array
      setFilter((prevFilter) => [...prevFilter, name.toLowerCase()]);
    }
  };

  console.log(filter, 'FLTER');

  useEffect(() => {
    if (!filter.length) {
      setFilterCards(cards);
      return;
    }
    let newArr = [];
    filter.forEach((inst) => {
      const filterArr = cards.filter((innerInst) => innerInst.host === inst);
      newArr = [...newArr, ...filterArr];
    });
    setFilterCards(newArr);
  }, [filter]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[92vh] my-8">
        {/* Event Bubble Section */}
        <div className="flex justify-center my-4">
          <div className="outline outline-[#6031F5] flex justify-center bg-[#181818] w-[1000px] rounded-3xl py-2">
            <h4 className="bg-gradient-to-r from-[#892DFC] to-[#1C37EA] text-white py-2 px-9 text-lg rounded-3xl">
              Event
            </h4>
          </div>
        </div>

        {/* Cards Section */}
        <Slider filterCards={filterCards} />
        {/* Filter Button Section */}
        <div className="relative z-50 text-[#2BF2FF] flex justify-end mr-10 mt-20">
          <BiFilterAlt
            size="50"
            className=" outline outline-[#3157E0] rounded-full p-3 bg-[#181818] cursor-pointer"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          />
          {isFilterOpen ? (
            <div className="outline outline-[#6031F5] absolute bottom-0 right-20 py-4 px-5 rounded-xl bg-gradient-to-r from-[#14011f] to-[#010138] text-white">
              <div className="flex justify-between items-center">
                <p className="text-xl my-2">Filter</p>
                <RxCrossCircled
                  size="25"
                  className="text-[#16DBF8] cursor-pointer"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                />
              </div>
              <hr />
              <p className="text-lg my-2">Hosts</p>
              <div className="flex flex-col gap-2 align-middle">
                <div className="flex gap-4 justify-between items-center">
                  <label htmlFor="web3house" className="text-lg text-[#16DBF8]">
                    Web3 House
                  </label>
                  <input
                    type="checkbox"
                    name="web3house"
                    id="web3house"
                    className="accent-[#04C6F2] cursor-pointer h-4 w-4"
                    onClick={onClickHandler}
                  />
                </div>
                <div className="flex gap-4 justify-between items-center">
                  <label htmlFor="learnweb3" className="text-lg text-[#16DBF8]">
                    Learn Web3
                  </label>
                  <input
                    type="checkbox"
                    name="learnweb3"
                    id="learnweb3"
                    className="accent-[#04C6F2] cursor-pointer h-4 w-4"
                    onClick={onClickHandler}
                  />
                </div>
                <div className="flex gap-4 justify-between items-center">
                  <label htmlFor="hirehouse" className="text-lg text-[#16DBF8]">
                    Hire House
                  </label>
                  <input
                    type="checkbox"
                    name="hirehouse"
                    id="hirehouse"
                    className="accent-[#04C6F2] cursor-pointer h-4 w-4"
                    onClick={onClickHandler}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}

{
  /* <div className="my-8 flex justify-center">
          <div className="bg-gradient-to-r from-[#FF04C8] via-[#FFFFFF] to-[#0038FF] rounded-xl p-1 translate-x-64 z-30">
            <article className="p-4 rounded-xl bg-gradient-to-r from-[#14011f] to-[#010138] text-white max-w-[500px]">
              <Image
                src="/image/dev.jpg"
                width={500}
                height={100}
                quality={100}
                alt="Dev Media"
                className="rounded-md"
              />
              <div className="flex align-middle my-4 justify-between">
                <p className="text-xl font-sans">Dev media web3 conference</p>
                <p className="flex gap-2 align-middle text-lg font-light">
                  <MdGroup size="25" /> 200/500
                </p>
              </div>
              <div className="flex gap-2 align-middle text-md font-sans">
                <MdLocationPin size="20" />
                <p>Global centre for conference</p>
              </div>
              <div className="flex align-middle my-4 gap-8">
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineCalendar size="20" /> 31-08-2022
                </p>
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineClockCircle size="20" /> 6:00 PM IST
                </p>
              </div>
              <p className="opacity-50">
                Web3 development course for starters. Join the course now and
                avail 50 coins on your wallet.
              </p>
              <div className="flex justify-center mt-4">
                <button className="text-lg py-1 px-6 bg-gradient-to-r from-[#2BF2FF] to-[#04C6F2] text-black rounded-md">
                  Register
                </button>
              </div>
            </article>
          </div>
          <div className="bg-gradient-to-r from-[#FF04C8] via-[#FFFFFF] to-[#0038FF] rounded-xl p-1 translate-x-16 z-40">
            <article className="p-4 rounded-xl bg-gradient-to-r from-[#14011f] to-[#010138] text-white max-w-[500px]">
              <Image
                src="/image/dev.jpg"
                width={500}
                height={100}
                quality={100}
                alt="Dev Media"
                className="rounded-md"
              />
              <div className="flex align-middle my-4 justify-between">
                <p className="text-xl font-sans">Dev media web3 conference</p>
                <p className="flex gap-2 align-middle text-lg font-light">
                  <MdGroup size="25" /> 200/500
                </p>
              </div>
              <div className="flex gap-2 align-middle text-md font-sans">
                <MdLocationPin size="20" />
                <p>Global centre for conference</p>
              </div>
              <div className="flex align-middle my-4 gap-8">
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineCalendar size="20" /> 31-08-2022
                </p>
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineClockCircle size="20" /> 6:00 PM IST
                </p>
              </div>
              <p className="opacity-50">
                Web3 development course for starters. Join the course now and
                avail 50 coins on your wallet.
              </p>
              <div className="flex justify-center mt-4">
                <button className="text-lg py-1 px-6 bg-gradient-to-r from-[#2BF2FF] to-[#04C6F2] text-black rounded-md">
                  Register
                </button>
              </div>
            </article>
          </div>
          <div className="bg-gradient-to-r from-[#FF04C8] via-[#FFFFFF] to-[#0038FF] rounded-xl p-1 z-50">
            <article className="p-4 rounded-xl bg-gradient-to-r from-[#14011f] to-[#010138] text-white max-w-[500px]">
              <Image
                src="/image/dev.jpg"
                width={500}
                height={100}
                quality={100}
                alt="Dev Media"
                className="rounded-md"
              />
              <div className="flex align-middle my-4 justify-between">
                <p className="text-xl font-sans">Dev media web3 conference</p>
                <p className="flex gap-2 align-middle text-lg font-light">
                  <MdGroup size="25" /> 200/500
                </p>
              </div>
              <div className="flex gap-2 align-middle text-md font-sans">
                <MdLocationPin size="20" />
                <p>Global centre for conference</p>
              </div>
              <div className="flex align-middle my-4 gap-8">
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineCalendar size="20" /> 31-08-2022
                </p>
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineClockCircle size="20" /> 6:00 PM IST
                </p>
              </div>
              <p className="opacity-50">
                Web3 development course for starters. Join the course now and
                avail 50 coins on your wallet.
              </p>
              <div className="flex justify-center mt-4">
                <button className="text-lg py-1 px-6 bg-gradient-to-r from-[#2BF2FF] to-[#04C6F2] text-black rounded-md">
                  Register
                </button>
              </div>
            </article>
          </div>
          <div className="bg-gradient-to-r from-[#FF04C8] via-[#FFFFFF] to-[#0038FF] rounded-xl p-1 -translate-x-16 z-20">
            <article className="p-4 rounded-xl bg-gradient-to-r from-[#14011f] to-[#010138] text-white max-w-[500px]">
              <Image
                src="/image/dev.jpg"
                width={500}
                height={100}
                quality={100}
                alt="Dev Media"
                className="rounded-md"
              />
              <div className="flex align-middle my-4 justify-between">
                <p className="text-xl font-sans">Dev media web3 conference</p>
                <p className="flex gap-2 align-middle text-lg font-light">
                  <MdGroup size="25" /> 200/500
                </p>
              </div>
              <div className="flex gap-2 align-middle text-md font-sans">
                <MdLocationPin size="20" />
                <p>Global centre for conference</p>
              </div>
              <div className="flex align-middle my-4 gap-8">
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineCalendar size="20" /> 31-08-2022
                </p>
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineClockCircle size="20" /> 6:00 PM IST
                </p>
              </div>
              <p className="opacity-50">
                Web3 development course for starters. Join the course now and
                avail 50 coins on your wallet.
              </p>
              <div className="flex justify-center mt-4">
                <button className="text-lg py-1 px-6 bg-gradient-to-r from-[#2BF2FF] to-[#04C6F2] text-black rounded-md">
                  Register
                </button>
              </div>
            </article>
          </div>
          <div className="bg-gradient-to-r from-[#FF04C8] via-[#FFFFFF] to-[#0038FF] rounded-xl p-1 -translate-x-64 z-10">
            <article className="p-4 rounded-xl bg-gradient-to-r from-[#14011f] to-[#010138] text-white max-w-[500px]">
              <Image
                src="/image/dev.jpg"
                width={500}
                height={100}
                quality={100}
                alt="Dev Media"
                className="rounded-md"
              />
              <div className="flex align-middle my-4 justify-between">
                <p className="text-xl font-sans">Dev media web3 conference</p>
                <p className="flex gap-2 align-middle text-lg font-light">
                  <MdGroup size="25" /> 200/500
                </p>
              </div>
              <div className="flex gap-2 align-middle text-md font-sans">
                <MdLocationPin size="20" />
                <p>Global centre for conference</p>
              </div>
              <div className="flex align-middle my-4 gap-8">
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineCalendar size="20" /> 31-08-2022
                </p>
                <p className="flex align-middle gap-2 text-sm font-sans my-2">
                  <AiOutlineClockCircle size="20" /> 6:00 PM IST
                </p>
              </div>
              <p className="opacity-50">
                Web3 development course for starters. Join the course now and
                avail 50 coins on your wallet.
              </p>
              <div className="flex justify-center mt-4">
                <button className="text-lg py-1 px-6 bg-gradient-to-r from-[#2BF2FF] to-[#04C6F2] text-black rounded-md">
                  Register
                </button>
              </div>
            </article>
          </div>
        </div> */
}
