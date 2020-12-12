import React, { Fragment } from 'react';
import { Section } from 'lib/components/Section';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from 'lib/components/Checkbox';
import { InputLabel } from 'lib/components/InputLabel';
import { Input } from 'lib/components/Input';
import { Date } from 'lib/components/Date';
import { CodeCombo } from 'lib/components/CodeCombo';
import { Grid } from 'lib/components/Grid';

const CheckBox = () => {
	return (
		<Fragment>
			<Section title="مشاهده اطلاعات قرارداد">
				<Grid container>
					<Grid item xs={1} left>
						<InputLabel>شماره سپام:</InputLabel>
					</Grid>
					<Grid item xs={2}>
						<Input name="sepamId" />
					</Grid>
					<Grid item xs={1} left>
						<InputLabel>نام متقاضی:</InputLabel>
					</Grid>
					<Grid item xs={2}>
						<Input name="firstName" />
					</Grid>
					<Grid item xs={1} left>
						<InputLabel>وضعیت قرارداد:</InputLabel>
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
						<InputLabel>شماره حساب:</InputLabel>
					</Grid>
					<Grid item xs={2}>
						<Input name="sepamId" />
					</Grid>
					<Grid item xs={1} left>
						<InputLabel>شناسه ملی:</InputLabel>
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
						<InputLabel>نوع اعتبار:</InputLabel>
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
						<InputLabel>وضعیت اسناد:</InputLabel>
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
						<InputLabel>گشایش:</InputLabel>
					</Grid>
					<Grid container xs={2} left>
						<Grid item xs={5}>
							<Date name="firstName" />
						</Grid>
						<Grid item xs={1} left>
							<InputLabel>تا:</InputLabel>
						</Grid>
						<Grid item xs={1} left />
						<Grid item xs={5} left>
							<Date name="sepamId" />
						</Grid>
					</Grid>
					<Grid item xs={1} left>
						<InputLabel>سررسید:</InputLabel>
					</Grid>
					<Grid container xs={2} left>
						<Grid item xs={5}>
							<Date name="firstName" />
						</Grid>
						<Grid item xs={1} left>
							<InputLabel>تا:</InputLabel>
						</Grid>
						<Grid item xs={1} left />
						<Grid item xs={5} left>
							<Date name="sepamId" />
						</Grid>
					</Grid>
					<Grid item xs={1} left>
						<InputLabel>مبلغ اعتباراز:</InputLabel>
					</Grid>
					<Grid container xs={2} left>
						<Grid item xs={5}>
							<Date name="firstName" />
						</Grid>
						<Grid item xs={1} left>
							<InputLabel>تا:</InputLabel>
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

export default CheckBox;
