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
