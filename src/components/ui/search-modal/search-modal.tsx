'use client';

import { getCity } from '@/lib/api/get-city';
import useDebounce from '@/lib/hooks/use-debounce';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SearchResultItem } from '../search-result-item';
import { IconLoading, IconPlus } from '@/components/icons';

interface SearchModalProps {
  close: () => void;
}

export const SearchModal = ({ close }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState([]);

  const debounceSearchTerm = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debounceSearchTerm) {
      setLoading(true);
      getCity(searchQuery, setSearchResult, setLoading);
    }
  }, [debounceSearchTerm]);

  useEffect(() => {
    if (!searchQuery) {
      setSearchResult([]);
      setLoading(true);
    }
    setLoading(true);
    setSearchResult([]);
  }, [searchQuery]);

  // Закрытие модалки при нажатии "Esc"
  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  // Блокировка скролла
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <React.Fragment>
      {createPortal(
        <div
          onClick={close}
          className="min-h-svh bg-plt-primary/80 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-10 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-fit max-w-96 w-full p-3 m-auto absolute top-0 left-0 right-0 bottom-0 z-20    animate-fade-in"
          >
            <div className="text-plt-white bg-gradient-to-b from-plt-primary to-plt-secondary rounded-3xl p-3">
              <p className="pt-3 opacity-60">Поиск места</p>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.currentTarget.value)}
                type="text"
                placeholder="Введите название населенного пункта"
                className="w-full bg-plt-primary p-2 my-3 rounded-lg outline-none"
              />
              {searchQuery && (
                <div className="absolute top-28 left-3 right-3 z-30 bg-plt-primary rounded-lg p-3 grid gap-3">
                  {!isLoading ? (
                    searchResult.length > 1 ? (
                      searchResult?.map((item, index) => (
                        <SearchResultItem
                          key={index}
                          item={item}
                          close={close}
                        />
                      ))
                    ) : (
                      <div className="mx-auto">Ничего не найдено</div>
                    )
                  ) : (
                    <div className="w-fit h-fit animate-spin mx-auto">
                      <IconLoading />
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              onClick={close}
              className="absolute top-7 right-7 flex items-center justify-center p-1 rounded-full bg-plt-primary text-plt-white"
            >
              <IconPlus className="rotate-45" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </React.Fragment>
  );
};

/*
import React, { useEffect, useState } from 'react';

import style from '../header.module.scss';
import SearchCloseSvg from './search-close-svg';
import SearchIconSvg from './search-icon-svg';
import { Input } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import Link from 'next/link';
import SearchResult from './search-result';
import useDebounce from '../../../hooks/useDebounce';
import SearchLoading from './search-loading';
import SearchNothingFound from './search-nothing-found';

const Search = ({ setSearchOpen }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [founded, setFounded] = useState([]);

    const ref = useClickOutside(() => {
        setSearchOpen(false);
        setSearchQuery('');
        setFounded([]);
    });

    const inputStyle = {
        input: {
            width: '500px',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            fontFamily: 'SF Pro Display',
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: 400,
        },
    };

    const debounceSearchTerm = useDebounce(searchQuery, 500);

    useEffect(() => {
        if (debounceSearchTerm) {
            setLoading(true);
            getSearchQuery(searchQuery, setFounded, setLoading);
        }
    }, [debounceSearchTerm]);

    useEffect(() => {
        if (!searchQuery) {
            setFounded([]);
            setLoading(true);
        }
        setLoading(true);
        setFounded([]);
    }, [searchQuery]);

    return (
        <div className={style['search']}>
            <div className={style['background']}></div>
            <div className={style['search__content']} ref={ref}>
                <div className={style['search__controls-wrapper']}>
                    <div className={style['search__controls']}>
                        <div className={style['search__controls-search']}>
                            <SearchIconSvg />
                            <Input
                                styles={inputStyle}
                                placeholder="Поиск"
                                onChange={(evt) =>
                                    setSearchQuery(evt.currentTarget.value)
                                }
                            />
                        </div>
                        <button
                            className={style['search__close-btn']}
                            onClick={() => setSearchOpen(false)}
                        >
                            <SearchCloseSvg />
                        </button>
                    </div>
                </div>

                <div className={style['search__result']}>
                    <div className={style['search__fast-links']}>
                        <h4 className={style['search__fast-links-title']}>
                            Быстрые ссылки
                        </h4>
                        <ul className={style['search__fast-links-list']}>
                            <li className={style['search__fast-links-item']}>
                                <Link
                                    className={
                                        style['search__fast-links-item-link']
                                    }
                                    href="/solutions-oil"
                                >
                                    Нефтегазовая отрасль
                                </Link>
                            </li>
                            <li className={style['search__fast-links-item']}>
                                <Link
                                    className={
                                        style['search__fast-links-item-link']
                                    }
                                    href={'/services-auto'}
                                >
                                    Автомобильные грузоперевозки
                                </Link>
                            </li>
                            <li className={style['search__fast-links-item']}>
                                <Link
                                    className={
                                        style['search__fast-links-item-link']
                                    }
                                    href={'/company'}
                                >
                                    О компании
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {searchQuery && isLoading ? (
                        <SearchLoading />
                    ) : searchQuery && founded.length !== 0 ? (
                        <SearchResult founded={founded} />
                    ) : !searchQuery ? null : (
                        <SearchNothingFound />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;

*/
