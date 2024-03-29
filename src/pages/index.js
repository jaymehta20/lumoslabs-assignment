import Head from 'next/head';

import Slider from '../components/slider';
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
    const { name } = e.target;
    if (filter.includes(name)) {
      // Remove the name element from the filter array
      setFilter((prevFilter) => prevFilter.filter((item) => item !== name));
    } else {
      // Add the name element to the filter array
      setFilter((prevFilter) => [...prevFilter, name.toLowerCase()]);
    }
  };

  useEffect(() => {
    if (!filter?.length) {
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
        <title>Lumos Lab Assignment</title>
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
        <div className="relative z-50 text-[#2BF2FF] flex justify-end mr-10">
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
