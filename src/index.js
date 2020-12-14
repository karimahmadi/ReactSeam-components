import React, { Fragment } from 'react';
import { render } from 'react-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';
import { ModalProvider } from './lib/components/Modal';
import { Section } from './lib/components/Section';
import { ThemeProvider } from './lib/components/ThemeProvider';
import { InputLabel as Label } from './lib/components/InputLabel';
import { Input } from './lib/components/Input';
import { Date } from './lib/components/Date';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from './lib/components/Checkbox';
import { CodeCombo } from './lib/components/CodeCombo';
import { DataTable } from './lib/components/DataTable';
import { Grid } from './lib/components/Grid';


const TestSection = () => {
	const useData = () => [
		{
			date: '1398/10/18',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/10/25',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/02',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/09',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/16',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/09',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/16',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/09',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/16',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/09',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/16',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/09',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/16',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/09',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/16',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/09',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/16',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/09',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
		{
			date: '1398/11/16',
			dayofweek: 'جمعه',
			holidaytype: 'تعطیلات هفتگی',
			desc: '',
		},
	];

	const rows = useData();
	const colsDef = [
		{
			checkbox: true,
		},
		{
			id: 'date',
			headerAlign: 'right',
			align: 'right',
			numeric: true,
			disablePadding: true,
			label: 'تاریخ',
		},
		{
			id: 'dayofweek',
			headerAlign: 'right',
			align: 'right',
			numeric: true,
			disablePadding: true,
			label: 'روز هفته',
		},
		{
			id: 'holidaytype',
			headerAlign: 'right',
			align: 'right',
			numeric: true,
			disablePadding: true,
			label: 'نوع تعطیلی',
		},
		{
			id: 'desc',
			headerAlign: 'right',
			align: 'right',
			numeric: true,
			disablePadding: true,
			label: 'توضیحات',
		},
	];

	return (
		<Fragment>
			<Section title="تقویم تعطیلات سامانه چکاوک">
				<Grid container alignItems="center" spacing={0}>
					<Grid item lg={1} md={1} sm={1} xs={1}>
						<Label>از تاریخ :</Label>
					</Grid>
					<Grid item lg={2} md={2} sm={2} xs={2}>
						<Date />
					</Grid>
					<Grid item lg={1} md={1} sm={1} xs={1}>
						<Label>تا تاریخ :</Label>
					</Grid>
					<Grid item lg={2} md={2} sm={2} xs={2}>
						<Date />
					</Grid>
					<Grid item lg={1} md={1} sm={1} xs={1}>
						<Label>نوع تعطیلی :</Label>
					</Grid>
					<Grid item lg={3} md={3} sm={3} xs={3}>
						<Input />
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={1} left>
						<Label>شماره سپام:</Label>
					</Grid>
					<Grid item xs={2}>
						<Input name="sepamId" />
					</Grid>
					<Grid item xs={1} left>
						<Label>نام متقاضی:</Label>
					</Grid>
					<Grid item xs={2}>
						<Input name="firstName" />
					</Grid>
					<Grid item xs={1} left>
						<Label>وضعیت قرارداد:</Label>
					</Grid>
					<Grid item xs={1}>
						<FormControlLabel
							control={
								<Checkbox
									// checked={checked[6]}
									// onChange={handleChange}
									name="batel"
								/>
							}
							label="موقت"
						/>
					</Grid>
					<Grid item xs={1}>
						<FormControlLabel
							control={
								<Checkbox
									// checked={checked[6]}
									// onChange={handleChange}
									name="batel"
								/>
							}
							label="تایید شده"
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={1} left>
						<Label>شماره حساب:</Label>
					</Grid>
					<Grid item xs={2}>
						<Input name="sepamId" />
					</Grid>
					<Grid item xs={1} left>
						<Label>شناسه ملی:</Label>
					</Grid>
					<Grid item xs={2}>
						<Input name="firstName" />
					</Grid>
					<Grid item xs={1} left />
					<Grid item xs={1}>
						<FormControlLabel
							control={
								<Checkbox
									// checked={checked[6]}
									// onChange={handleChange}
									name="batel"
								/>
							}
							label="تسویه شده"
						/>
					</Grid>
					<Grid item xs={1}>
						<FormControlLabel
							control={
								<Checkbox
									// checked={checked[6]}
									// onChange={handleChange}
									name="batel"
								/>
							}
							label="باطل شده"
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={1} left>
						<Label>نوع اعتبار:</Label>
					</Grid>
					<Grid item xs={2}>
						<CodeCombo
							items={[]}
							// value={loadData.contractRequest.contract.possessionType.possessionTypeId}
							propertyCode="code"
							propertyTitle="title"
						/>
					</Grid>
					<Grid item xs={1} left>
						<Label>وضعیت اسناد:</Label>
					</Grid>
					<Grid item xs={2}>
						<CodeCombo
							items={[]}
							// value={loadData.contractRequest.contract.possessionType.possessionTypeId}
							propertyCode="code"
							propertyTitle="title"
						/>
					</Grid>
					<Grid item xs={1} left />
					<Grid item xs={2}>
						<FormControlLabel
							control={
								<Checkbox
									// checked={checked[6]}
									// onChange={handleChange}
									name="batel"
								/>
							}
							label="بایگانی شده"
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={1} left>
						<Label>گشایش:</Label>
					</Grid>
					<Grid container xs={2} left>
						<Grid item xs={5}>
							<Date name="firstName" />
						</Grid>
						<Grid item xs={1} left>
							<Label>تا:</Label>
						</Grid>
						<Grid item xs={1} left />
						<Grid item xs={5} left>
							<Date name="sepamId" />
						</Grid>
					</Grid>
					<Grid item xs={1} left>
						<Label>سررسید:</Label>
					</Grid>
					<Grid container xs={2} left>
						<Grid item xs={5}>
							<Date name="firstName" />
						</Grid>
						<Grid item xs={1} left>
							<Label>تا:</Label>
						</Grid>
						<Grid item xs={1} left />
						<Grid item xs={5} left>
							<Date name="sepamId" />
						</Grid>
					</Grid>
					<Grid item xs={1} left>
						<Label>مبلغ اعتباراز:</Label>
					</Grid>
					<Grid container xs={2} left>
						<Grid item xs={5}>
							<Date name="firstName" />
						</Grid>
						<Grid item xs={1} left>
							<Label>تا:</Label>
						</Grid>
						<Grid item xs={1} left />
						<Grid item xs={5} left>
							<Date name="sepamId" />
						</Grid>
					</Grid>
				</Grid>
			</Section>
		</Fragment>
	);
};

const App = () => (
	<ThemeProvider>
		<TestSection />
	</ThemeProvider>
);

render(
	<ModalProvider>
		<App />
	</ModalProvider>,
	document.getElementById('root'),
);
