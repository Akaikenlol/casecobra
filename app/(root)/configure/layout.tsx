import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Provider from "@/components/Provider";
import Steps from "@/components/Steps";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<MaxWidthWrapper className="flex-1 flex flex-col min-h-screen no-scrollbar">
			<Steps />
			<Provider>{children}</Provider>
		</MaxWidthWrapper>
	);
};

export default Layout;
