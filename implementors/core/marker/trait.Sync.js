(function() {var implementors = {};
implementors["instantiate"] = [{"text":"impl Sync for ResolveAll","synthetic":true,"types":[]}];
implementors["libc"] = [{"text":"impl !Sync for group","synthetic":true,"types":[]},{"text":"impl Sync for utimbuf","synthetic":true,"types":[]},{"text":"impl Sync for timeval","synthetic":true,"types":[]},{"text":"impl Sync for timespec","synthetic":true,"types":[]},{"text":"impl Sync for rlimit","synthetic":true,"types":[]},{"text":"impl Sync for rusage","synthetic":true,"types":[]},{"text":"impl Sync for ipv6_mreq","synthetic":true,"types":[]},{"text":"impl !Sync for hostent","synthetic":true,"types":[]},{"text":"impl !Sync for iovec","synthetic":true,"types":[]},{"text":"impl Sync for pollfd","synthetic":true,"types":[]},{"text":"impl Sync for winsize","synthetic":true,"types":[]},{"text":"impl Sync for linger","synthetic":true,"types":[]},{"text":"impl !Sync for sigval","synthetic":true,"types":[]},{"text":"impl Sync for itimerval","synthetic":true,"types":[]},{"text":"impl Sync for tms","synthetic":true,"types":[]},{"text":"impl !Sync for servent","synthetic":true,"types":[]},{"text":"impl !Sync for protoent","synthetic":true,"types":[]},{"text":"impl Sync for in_addr","synthetic":true,"types":[]},{"text":"impl Sync for ip_mreq","synthetic":true,"types":[]},{"text":"impl Sync for ip_mreq_source","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_in","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_in6","synthetic":true,"types":[]},{"text":"impl !Sync for addrinfo","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_ll","synthetic":true,"types":[]},{"text":"impl Sync for fd_set","synthetic":true,"types":[]},{"text":"impl !Sync for tm","synthetic":true,"types":[]},{"text":"impl Sync for sched_param","synthetic":true,"types":[]},{"text":"impl !Sync for Dl_info","synthetic":true,"types":[]},{"text":"impl !Sync for lconv","synthetic":true,"types":[]},{"text":"impl Sync for in_pktinfo","synthetic":true,"types":[]},{"text":"impl !Sync for ifaddrs","synthetic":true,"types":[]},{"text":"impl Sync for in6_rtmsg","synthetic":true,"types":[]},{"text":"impl Sync for arpreq","synthetic":true,"types":[]},{"text":"impl Sync for arpreq_old","synthetic":true,"types":[]},{"text":"impl Sync for arphdr","synthetic":true,"types":[]},{"text":"impl !Sync for mmsghdr","synthetic":true,"types":[]},{"text":"impl Sync for epoll_event","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_un","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_storage","synthetic":true,"types":[]},{"text":"impl Sync for utsname","synthetic":true,"types":[]},{"text":"impl !Sync for sigevent","synthetic":true,"types":[]},{"text":"impl Sync for rlimit64","synthetic":true,"types":[]},{"text":"impl !Sync for glob_t","synthetic":true,"types":[]},{"text":"impl !Sync for passwd","synthetic":true,"types":[]},{"text":"impl !Sync for spwd","synthetic":true,"types":[]},{"text":"impl Sync for dqblk","synthetic":true,"types":[]},{"text":"impl Sync for signalfd_siginfo","synthetic":true,"types":[]},{"text":"impl Sync for itimerspec","synthetic":true,"types":[]},{"text":"impl Sync for fsid_t","synthetic":true,"types":[]},{"text":"impl Sync for packet_mreq","synthetic":true,"types":[]},{"text":"impl Sync for cpu_set_t","synthetic":true,"types":[]},{"text":"impl !Sync for if_nameindex","synthetic":true,"types":[]},{"text":"impl Sync for msginfo","synthetic":true,"types":[]},{"text":"impl Sync for sembuf","synthetic":true,"types":[]},{"text":"impl Sync for input_event","synthetic":true,"types":[]},{"text":"impl Sync for input_id","synthetic":true,"types":[]},{"text":"impl Sync for input_absinfo","synthetic":true,"types":[]},{"text":"impl Sync for input_keymap_entry","synthetic":true,"types":[]},{"text":"impl Sync for input_mask","synthetic":true,"types":[]},{"text":"impl Sync for ff_replay","synthetic":true,"types":[]},{"text":"impl Sync for ff_trigger","synthetic":true,"types":[]},{"text":"impl Sync for ff_envelope","synthetic":true,"types":[]},{"text":"impl Sync for ff_constant_effect","synthetic":true,"types":[]},{"text":"impl Sync for ff_ramp_effect","synthetic":true,"types":[]},{"text":"impl Sync for ff_condition_effect","synthetic":true,"types":[]},{"text":"impl !Sync for ff_periodic_effect","synthetic":true,"types":[]},{"text":"impl Sync for ff_rumble_effect","synthetic":true,"types":[]},{"text":"impl Sync for ff_effect","synthetic":true,"types":[]},{"text":"impl !Sync for dl_phdr_info","synthetic":true,"types":[]},{"text":"impl Sync for Elf32_Ehdr","synthetic":true,"types":[]},{"text":"impl Sync for Elf64_Ehdr","synthetic":true,"types":[]},{"text":"impl Sync for Elf32_Sym","synthetic":true,"types":[]},{"text":"impl Sync for Elf64_Sym","synthetic":true,"types":[]},{"text":"impl Sync for Elf32_Phdr","synthetic":true,"types":[]},{"text":"impl Sync for Elf64_Phdr","synthetic":true,"types":[]},{"text":"impl Sync for Elf32_Shdr","synthetic":true,"types":[]},{"text":"impl Sync for Elf64_Shdr","synthetic":true,"types":[]},{"text":"impl Sync for Elf32_Chdr","synthetic":true,"types":[]},{"text":"impl Sync for Elf64_Chdr","synthetic":true,"types":[]},{"text":"impl Sync for ucred","synthetic":true,"types":[]},{"text":"impl !Sync for mntent","synthetic":true,"types":[]},{"text":"impl !Sync for posix_spawn_file_actions_t","synthetic":true,"types":[]},{"text":"impl Sync for posix_spawnattr_t","synthetic":true,"types":[]},{"text":"impl Sync for genlmsghdr","synthetic":true,"types":[]},{"text":"impl Sync for in6_pktinfo","synthetic":true,"types":[]},{"text":"impl Sync for arpd_request","synthetic":true,"types":[]},{"text":"impl Sync for inotify_event","synthetic":true,"types":[]},{"text":"impl Sync for fanotify_response","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_vm","synthetic":true,"types":[]},{"text":"impl Sync for regmatch_t","synthetic":true,"types":[]},{"text":"impl Sync for sock_extended_err","synthetic":true,"types":[]},{"text":"impl Sync for __c_anonymous_sockaddr_can_tp","synthetic":true,"types":[]},{"text":"impl Sync for __c_anonymous_sockaddr_can_j1939","synthetic":true,"types":[]},{"text":"impl Sync for can_filter","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_nl","synthetic":true,"types":[]},{"text":"impl Sync for dirent","synthetic":true,"types":[]},{"text":"impl Sync for dirent64","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_alg","synthetic":true,"types":[]},{"text":"impl Sync for af_alg_iv","synthetic":true,"types":[]},{"text":"impl Sync for mq_attr","synthetic":true,"types":[]},{"text":"impl Sync for sockaddr_can","synthetic":true,"types":[]},{"text":"impl Sync for statx","synthetic":true,"types":[]},{"text":"impl Sync for statx_timestamp","synthetic":true,"types":[]},{"text":"impl !Sync for aiocb","synthetic":true,"types":[]},{"text":"impl Sync for __exit_status","synthetic":true,"types":[]},{"text":"impl Sync for __timeval","synthetic":true,"types":[]},{"text":"impl !Sync for glob64_t","synthetic":true,"types":[]},{"text":"impl !Sync for msghdr","synthetic":true,"types":[]},{"text":"impl Sync for cmsghdr","synthetic":true,"types":[]},{"text":"impl Sync for termios","synthetic":true,"types":[]},{"text":"impl Sync for mallinfo","synthetic":true,"types":[]},{"text":"impl Sync for nlmsghdr","synthetic":true,"types":[]},{"text":"impl Sync for nlmsgerr","synthetic":true,"types":[]},{"text":"impl Sync for nl_pktinfo","synthetic":true,"types":[]},{"text":"impl Sync for nl_mmap_req","synthetic":true,"types":[]},{"text":"impl Sync for nl_mmap_hdr","synthetic":true,"types":[]},{"text":"impl Sync for nlattr","synthetic":true,"types":[]},{"text":"impl !Sync for rtentry","synthetic":true,"types":[]},{"text":"impl Sync for timex","synthetic":true,"types":[]},{"text":"impl Sync for ntptimeval","synthetic":true,"types":[]},{"text":"impl !Sync for regex_t","synthetic":true,"types":[]},{"text":"impl Sync for utmpx","synthetic":true,"types":[]},{"text":"impl Sync for sigset_t","synthetic":true,"types":[]},{"text":"impl Sync for sysinfo","synthetic":true,"types":[]},{"text":"impl Sync for msqid_ds","synthetic":true,"types":[]},{"text":"impl Sync for sigaction","synthetic":true,"types":[]},{"text":"impl Sync for statfs","synthetic":true,"types":[]},{"text":"impl Sync for flock","synthetic":true,"types":[]},{"text":"impl Sync for flock64","synthetic":true,"types":[]},{"text":"impl Sync for siginfo_t","synthetic":true,"types":[]},{"text":"impl !Sync for stack_t","synthetic":true,"types":[]},{"text":"impl Sync for stat","synthetic":true,"types":[]},{"text":"impl Sync for stat64","synthetic":true,"types":[]},{"text":"impl Sync for statfs64","synthetic":true,"types":[]},{"text":"impl Sync for statvfs64","synthetic":true,"types":[]},{"text":"impl Sync for pthread_attr_t","synthetic":true,"types":[]},{"text":"impl Sync for _libc_fpxreg","synthetic":true,"types":[]},{"text":"impl Sync for _libc_xmmreg","synthetic":true,"types":[]},{"text":"impl Sync for _libc_fpstate","synthetic":true,"types":[]},{"text":"impl Sync for user_regs_struct","synthetic":true,"types":[]},{"text":"impl !Sync for user","synthetic":true,"types":[]},{"text":"impl !Sync for mcontext_t","synthetic":true,"types":[]},{"text":"impl Sync for ipc_perm","synthetic":true,"types":[]},{"text":"impl Sync for shmid_ds","synthetic":true,"types":[]},{"text":"impl Sync for termios2","synthetic":true,"types":[]},{"text":"impl Sync for ip_mreqn","synthetic":true,"types":[]},{"text":"impl Sync for user_fpregs_struct","synthetic":true,"types":[]},{"text":"impl !Sync for ucontext_t","synthetic":true,"types":[]},{"text":"impl Sync for statvfs","synthetic":true,"types":[]},{"text":"impl Sync for max_align_t","synthetic":true,"types":[]},{"text":"impl Sync for sem_t","synthetic":true,"types":[]},{"text":"impl Sync for pthread_mutexattr_t","synthetic":true,"types":[]},{"text":"impl Sync for pthread_rwlockattr_t","synthetic":true,"types":[]},{"text":"impl Sync for pthread_condattr_t","synthetic":true,"types":[]},{"text":"impl Sync for fanotify_event_metadata","synthetic":true,"types":[]},{"text":"impl Sync for pthread_cond_t","synthetic":true,"types":[]},{"text":"impl Sync for pthread_mutex_t","synthetic":true,"types":[]},{"text":"impl Sync for pthread_rwlock_t","synthetic":true,"types":[]},{"text":"impl Sync for can_frame","synthetic":true,"types":[]},{"text":"impl Sync for canfd_frame","synthetic":true,"types":[]},{"text":"impl Sync for in6_addr","synthetic":true,"types":[]},{"text":"impl Sync for __c_anonymous_sockaddr_can_can_addr","synthetic":true,"types":[]},{"text":"impl Sync for DIR","synthetic":true,"types":[]},{"text":"impl Sync for FILE","synthetic":true,"types":[]},{"text":"impl Sync for fpos_t","synthetic":true,"types":[]},{"text":"impl Sync for timezone","synthetic":true,"types":[]},{"text":"impl Sync for fpos64_t","synthetic":true,"types":[]}];
implementors["memory_units"] = [{"text":"impl Sync for Bytes","synthetic":true,"types":[]},{"text":"impl Sync for Words","synthetic":true,"types":[]},{"text":"impl Sync for Pages","synthetic":true,"types":[]},{"text":"impl Sync for Words","synthetic":true,"types":[]},{"text":"impl Sync for Pages","synthetic":true,"types":[]}];
implementors["num_bigint"] = [{"text":"impl Sync for ParseBigIntError","synthetic":true,"types":[]},{"text":"impl Sync for BigUint","synthetic":true,"types":[]},{"text":"impl Sync for BigInt","synthetic":true,"types":[]},{"text":"impl Sync for Sign","synthetic":true,"types":[]}];
implementors["num_integer"] = [{"text":"impl&lt;A&gt; Sync for ExtendedGcd&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for IterBinomial&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T&gt; Sync for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ParseRatioError","synthetic":true,"types":[]}];
implementors["num_traits"] = [{"text":"impl Sync for ParseFloatError","synthetic":true,"types":[]},{"text":"impl Sync for FloatErrorKind","synthetic":true,"types":[]}];
implementors["parity_wasm"] = [{"text":"impl Sync for Module","synthetic":true,"types":[]},{"text":"impl Sync for FunctionSection","synthetic":true,"types":[]},{"text":"impl Sync for CodeSection","synthetic":true,"types":[]},{"text":"impl Sync for MemorySection","synthetic":true,"types":[]},{"text":"impl Sync for DataSection","synthetic":true,"types":[]},{"text":"impl Sync for ImportSection","synthetic":true,"types":[]},{"text":"impl Sync for ExportSection","synthetic":true,"types":[]},{"text":"impl Sync for GlobalSection","synthetic":true,"types":[]},{"text":"impl Sync for TypeSection","synthetic":true,"types":[]},{"text":"impl Sync for ElementSection","synthetic":true,"types":[]},{"text":"impl Sync for TableSection","synthetic":true,"types":[]},{"text":"impl Sync for CustomSection","synthetic":true,"types":[]},{"text":"impl Sync for ImportEntry","synthetic":true,"types":[]},{"text":"impl Sync for ResizableLimits","synthetic":true,"types":[]},{"text":"impl Sync for MemoryType","synthetic":true,"types":[]},{"text":"impl Sync for TableType","synthetic":true,"types":[]},{"text":"impl Sync for GlobalType","synthetic":true,"types":[]},{"text":"impl Sync for ExportEntry","synthetic":true,"types":[]},{"text":"impl Sync for GlobalEntry","synthetic":true,"types":[]},{"text":"impl Sync for VarUint32","synthetic":true,"types":[]},{"text":"impl Sync for VarUint7","synthetic":true,"types":[]},{"text":"impl Sync for Uint8","synthetic":true,"types":[]},{"text":"impl Sync for VarUint1","synthetic":true,"types":[]},{"text":"impl Sync for VarInt7","synthetic":true,"types":[]},{"text":"impl Sync for Uint32","synthetic":true,"types":[]},{"text":"impl Sync for VarInt32","synthetic":true,"types":[]},{"text":"impl Sync for VarInt64","synthetic":true,"types":[]},{"text":"impl Sync for Uint64","synthetic":true,"types":[]},{"text":"impl Sync for VarUint64","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for CountedList&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Sync for CountedWriter&lt;'a, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I, T&gt; Sync for CountedListWriter&lt;I, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for FunctionType","synthetic":true,"types":[]},{"text":"impl Sync for Instructions","synthetic":true,"types":[]},{"text":"impl Sync for InitExpr","synthetic":true,"types":[]},{"text":"impl Sync for BrTableData","synthetic":true,"types":[]},{"text":"impl Sync for Func","synthetic":true,"types":[]},{"text":"impl Sync for FuncBody","synthetic":true,"types":[]},{"text":"impl Sync for Local","synthetic":true,"types":[]},{"text":"impl Sync for ElementSegment","synthetic":true,"types":[]},{"text":"impl Sync for DataSegment","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for IndexMap&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for NameSection","synthetic":true,"types":[]},{"text":"impl Sync for ModuleNameSubsection","synthetic":true,"types":[]},{"text":"impl Sync for FunctionNameSubsection","synthetic":true,"types":[]},{"text":"impl Sync for LocalNameSubsection","synthetic":true,"types":[]},{"text":"impl Sync for RelocSection","synthetic":true,"types":[]},{"text":"impl Sync for Unparsed","synthetic":true,"types":[]},{"text":"impl Sync for ImportCountType","synthetic":true,"types":[]},{"text":"impl Sync for Section","synthetic":true,"types":[]},{"text":"impl Sync for External","synthetic":true,"types":[]},{"text":"impl Sync for Internal","synthetic":true,"types":[]},{"text":"impl Sync for Type","synthetic":true,"types":[]},{"text":"impl Sync for ValueType","synthetic":true,"types":[]},{"text":"impl Sync for BlockType","synthetic":true,"types":[]},{"text":"impl Sync for TableElementType","synthetic":true,"types":[]},{"text":"impl Sync for Instruction","synthetic":true,"types":[]},{"text":"impl Sync for RelocationEntry","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for SignatureBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for SignaturesBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for FunctionBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for TypeRefBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for FuncBodyBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for FunctionDefinition","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for DataSegmentBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for ExportBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for ExportInternalBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for GlobalBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for ImportBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Identity","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for MemoryBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for ModuleBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for TableBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for TableDefinition","synthetic":true,"types":[]},{"text":"impl Sync for TableEntryDefinition","synthetic":true,"types":[]}];
implementors["wasmi"] = [{"text":"impl Sync for Trap","synthetic":true,"types":[]},{"text":"impl !Sync for FuncInstance","synthetic":true,"types":[]},{"text":"impl&lt;'args&gt; !Sync for FuncInvocation&lt;'args&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for FuncRef","synthetic":true,"types":[]},{"text":"impl !Sync for GlobalInstance","synthetic":true,"types":[]},{"text":"impl !Sync for GlobalRef","synthetic":true,"types":[]},{"text":"impl Sync for NopExternals","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for RuntimeArgs&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for ImportsBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for MemoryInstance","synthetic":true,"types":[]},{"text":"impl !Sync for MemoryRef","synthetic":true,"types":[]},{"text":"impl !Sync for ModuleInstance","synthetic":true,"types":[]},{"text":"impl !Sync for ModuleRef","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for NotStartedModuleRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for StackRecycler","synthetic":true,"types":[]},{"text":"impl !Sync for TableInstance","synthetic":true,"types":[]},{"text":"impl !Sync for TableRef","synthetic":true,"types":[]},{"text":"impl Sync for GlobalDescriptor","synthetic":true,"types":[]},{"text":"impl Sync for MemoryDescriptor","synthetic":true,"types":[]},{"text":"impl Sync for Signature","synthetic":true,"types":[]},{"text":"impl Sync for TableDescriptor","synthetic":true,"types":[]},{"text":"impl Sync for Module","synthetic":true,"types":[]},{"text":"impl Sync for TrapKind","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for ResumableError","synthetic":true,"types":[]},{"text":"impl !Sync for ExternVal","synthetic":true,"types":[]},{"text":"impl Sync for ValueType","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeValue","synthetic":true,"types":[]},{"text":"impl Sync for F32","synthetic":true,"types":[]},{"text":"impl Sync for F64","synthetic":true,"types":[]}];
implementors["wasmi_validation"] = [{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for PlainValidator","synthetic":true,"types":[]},{"text":"impl Sync for PlainFuncValidator","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for StackWithLimit&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ModuleContext","synthetic":true,"types":[]},{"text":"impl Sync for ModuleContextBuilder","synthetic":true,"types":[]},{"text":"impl Sync for BlockFrame","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for FunctionValidationContext&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for StartedWith","synthetic":true,"types":[]},{"text":"impl Sync for StackValueType","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Locals&lt;'a&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()