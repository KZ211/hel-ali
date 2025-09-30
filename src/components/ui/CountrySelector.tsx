import React, { useState, useRef, useEffect } from 'react';

interface Country {
  code: string;
  name: string;
}

interface CountrySelectorProps {
  value: string;
  onChange: (country: string) => void;
  disabled?: boolean;
  className?: string;
  error?: string;
}

const COUNTRIES: Country[] = [
  { code: 'AR', name: 'Argentina' },
  { code: 'BO', name: 'Bolivia' },
  { code: 'BR', name: 'Brasil' },
  { code: 'CL', name: 'Chile' },
  { code: 'CO', name: 'Colombia' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'CU', name: 'Cuba' },
  { code: 'DO', name: 'República Dominicana' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'SV', name: 'El Salvador' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'HN', name: 'Honduras' },
  { code: 'MX', name: 'México' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'PA', name: 'Panamá' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Perú' },
  { code: 'UY', name: 'Uruguay' },
  { code: 'VE', name: 'Venezuela' },
  { code: 'ES', name: 'España' },
  { code: 'US', name: 'Estados Unidos' },
  { code: 'CA', name: 'Canadá' },
  { code: 'FR', name: 'Francia' },
  { code: 'DE', name: 'Alemania' },
  { code: 'IT', name: 'Italia' },
  { code: 'PT', name: 'Portugal' },
  { code: 'GB', name: 'Reino Unido' },
  { code: 'AU', name: 'Australia' },
  { code: 'JP', name: 'Japón' },
  { code: 'KR', name: 'Corea del Sur' },
  { code: 'CN', name: 'China' },
  { code: 'IN', name: 'India' },
  { code: 'RU', name: 'Rusia' },
  { code: 'ZA', name: 'Sudáfrica' },
  { code: 'EG', name: 'Egipto' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'KE', name: 'Kenia' },
  { code: 'MA', name: 'Marruecos' },
  { code: 'TN', name: 'Túnez' },
  { code: 'DZ', name: 'Argelia' }
];

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  value,
  onChange,
  disabled = false,
  className = '',
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCountries = COUNTRIES.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCountry = COUNTRIES.find(country => country.name === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0 && focusedIndex < filteredCountries.length) {
          onChange(filteredCountries[focusedIndex].name);
          setIsOpen(false);
          setSearchTerm('');
          setFocusedIndex(-1);
        } else if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => 
            prev < filteredCountries.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : filteredCountries.length - 1
          );
        }
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setFocusedIndex(-1);
    if (!isOpen) setIsOpen(true);
  };

  const handleCountrySelect = (country: Country) => {
    onChange(country.name);
    setIsOpen(false);
    setSearchTerm('');
    setFocusedIndex(-1);
  };

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={isOpen ? searchTerm : (selectedCountry?.name || value)}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Buscar país..."
          className={`
            w-full px-4 py-3 border rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${disabled ? 'text-gray-500' : 'text-gray-900'}
            ${error ? 'border-red-500' : 'border-gray-300'}
          `}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
          aria-label="Seleccionar país"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredCountries.length > 0 ? (
            <ul role="listbox" className="py-1">
              {filteredCountries.map((country, index) => (
                <li
                  key={country.code}
                  role="option"
                  aria-selected={country.name === value}
                  className={`
                    px-4 py-2 cursor-pointer transition-colors duration-150
                    ${index === focusedIndex ? 'bg-blue-100' : ''}
                    ${country.name === value ? 'bg-blue-50 text-blue-700' : 'text-gray-900'}
                    hover:bg-blue-100
                  `}
                  onClick={() => handleCountrySelect(country)}
                  onMouseEnter={() => setFocusedIndex(index)}
                >
                  <div className="flex items-center justify-between">
                    <span>{country.name}</span>
                    <span className="text-sm text-gray-500">{country.code}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-2 text-gray-500 text-center">
              No se encontraron países
            </div>
          )}
        </div>
      )}
    </div>
  );
};