import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getSalesReportByProductIdDispatch } from 'src/store/dispatch/getSalesReportsDispatch';
import { getSalesReportsListSelector } from 'src/store/selectors';
import { DateTime } from 'luxon';
import { SalesReportRecord } from 'src/store/reducers/responsePayloads';

export const useGetPlotData = (productId: string) => {
  const dispatch = useAppDispatch();
  const salesReportsState = useAppSelector(getSalesReportsListSelector);
  const salesReportsList = salesReportsState.value?.salesReportsList;

  useEffect(() => {
    dispatch(getSalesReportByProductIdDispatch({ productId }));
  }, [productId]);

  if (!salesReportsList) return undefined;
  console.log({ salesReportsList });

  const plotData = [...salesReportsList]
    .map((salesRecord: SalesReportRecord) => {
      return {
        date: salesRecord.weekEnding,
        retailSales: salesRecord.retailSales,
      };
    })
    .sort((a, b) => a.date.localeCompare(b.date))
    ?.reduce(
      (
        acc: Record<string, number>,
        curr: { date: string; retailSales: number }
      ) => {
        const { date, retailSales } = curr;
        const monthYear = DateTime.fromISO(date).toLocaleString({
          month: 'short',
          year: 'numeric',
        });
        if (!acc[monthYear]) {
          acc[monthYear] = retailSales;
          return acc;
        }
        acc[monthYear] += retailSales;

        return acc;
      },
      {}
    );
  return [['Retail sales', 'Month and year'], ...Object.entries(plotData)];
};
