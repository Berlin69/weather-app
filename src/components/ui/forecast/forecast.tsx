import { Card } from '../card';
import { ForecastItem } from '../forecast-item';

export const Forecast = ({ forecast }: any) => {
  const filteredList = forecast?.list?.filter((day: ForecastItem) =>
    day?.dt_txt?.includes('12:00:00')
  );

  return (
    <div>
      <Card className="bg-gradient-to-b from-plt-primary to-plt-secondary">
        <div className="flex justify-between gap-2 sm:grid sm:grid-cols-2 sm:gap-10 xs:grid-cols-1">
          {filteredList?.map((day: ForecastItem, index: number) => (
            <ForecastItem key={index} day={day} />
          ))}
        </div>
      </Card>
    </div>
  );
};
