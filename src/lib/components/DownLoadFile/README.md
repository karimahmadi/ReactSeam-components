      <DownLoadFile
        url='/pdf'
        authorization={`Bearer ${localStorage.getItem('Auth-Token')}`}
        responseType="blob"
        fileType="application/pdf"
        isValid={handleIsValidFunction}
        onError={handleError}
      >
        open new tab
      </DownLoadFile>

      <DownLoadFile
        download
        url='/pdf'
        authorization={`Bearer ${localStorage.getItem('Auth-Token')}`}
        responseType="blob"
        fileName="myPdfFile.pdf"
        isValid={handleIsValidFunction}
        onError={handleError}
      >
        download file
      </DownLoadFile>
      
			<DownLoadFile
				download
				url="/rest/lc/report/due/date/pdf/80"
				authorization={`Bearer ${localStorage.getItem('Auth-Token')}`}
				responseType="blob"
				fileType="application/pdf"
				requestHandler={requestHandlerOptions}
				params={{ branchId: 125, organManagementCode: 933100 }}
			>
				دریافت فایل
			</DownLoadFile>
